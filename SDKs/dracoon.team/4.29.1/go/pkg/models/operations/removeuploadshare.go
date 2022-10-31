package operations

import (
"openapi/pkg/models/shared")

type RemoveUploadSharePathParams struct {
    ShareID int64 `pathParam:"style=simple,explode=false,name=share_id"`
    
}

type RemoveUploadShareHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type RemoveUploadShareRequest struct {
    PathParams RemoveUploadSharePathParams 
    Headers RemoveUploadShareHeaders 
    
}

type RemoveUploadShareResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

