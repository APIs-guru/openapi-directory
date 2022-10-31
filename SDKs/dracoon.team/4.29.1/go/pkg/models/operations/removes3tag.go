package operations

import (
"openapi/pkg/models/shared")

type RemoveS3TagPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type RemoveS3TagHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type RemoveS3TagRequest struct {
    PathParams RemoveS3TagPathParams 
    Headers RemoveS3TagHeaders 
    
}

type RemoveS3TagResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

