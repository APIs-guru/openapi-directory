package operations

import (
"openapi/pkg/models/shared")

type RequestUserFileKeyPathParams struct {
    FileID int64 `pathParam:"style=simple,explode=false,name=file_id"`
    
}

type RequestUserFileKeyQueryParams struct {
    Version *string `queryParam:"style=form,explode=true,name=version"`
    
}

type RequestUserFileKeyHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type RequestUserFileKeyRequest struct {
    PathParams RequestUserFileKeyPathParams 
    QueryParams RequestUserFileKeyQueryParams 
    Headers RequestUserFileKeyHeaders 
    
}

type RequestUserFileKeyResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    FileKey *shared.FileKey 
    StatusCode int64 
    
}

