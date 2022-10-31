package operations

import (
"openapi/pkg/models/shared")

type RequestDownloadSharePathParams struct {
    ShareID int64 `pathParam:"style=simple,explode=false,name=share_id"`
    
}

type RequestDownloadShareHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
    
}

type RequestDownloadShareRequest struct {
    PathParams RequestDownloadSharePathParams 
    Headers RequestDownloadShareHeaders 
    
}

type RequestDownloadShareResponse struct {
    ContentType string 
    DownloadShare *shared.DownloadShare 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

