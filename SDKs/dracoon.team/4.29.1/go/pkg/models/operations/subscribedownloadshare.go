package operations

import (
"openapi/pkg/models/shared")

type SubscribeDownloadSharePathParams struct {
    ShareID int64 `pathParam:"style=simple,explode=false,name=share_id"`
    
}

type SubscribeDownloadShareHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type SubscribeDownloadShareRequest struct {
    PathParams SubscribeDownloadSharePathParams 
    Headers SubscribeDownloadShareHeaders 
    
}

type SubscribeDownloadShareResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    SubscribedDownloadShare *shared.SubscribedDownloadShare 
    
}

