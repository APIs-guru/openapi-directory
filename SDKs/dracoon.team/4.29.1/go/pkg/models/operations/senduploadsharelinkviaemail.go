package operations

import (
"openapi/pkg/models/shared")

type SendUploadShareLinkViaEmailPathParams struct {
    ShareID int64 `pathParam:"style=simple,explode=false,name=share_id"`
    
}

type SendUploadShareLinkViaEmailHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type SendUploadShareLinkViaEmailRequest struct {
    PathParams SendUploadShareLinkViaEmailPathParams 
    Headers SendUploadShareLinkViaEmailHeaders 
    Request shared.UploadShareLinkEmail `request:"mediaType=application/json"`
    
}

type SendUploadShareLinkViaEmailResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

