package operations

import (
"openapi/pkg/models/shared")

type UnsubscribeUploadSharePathParams struct {
    ShareID int64 `pathParam:"style=simple,explode=false,name=share_id"`
    
}

type UnsubscribeUploadShareHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type UnsubscribeUploadShareRequest struct {
    PathParams UnsubscribeUploadSharePathParams 
    Headers UnsubscribeUploadShareHeaders 
    
}

type UnsubscribeUploadShareResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

