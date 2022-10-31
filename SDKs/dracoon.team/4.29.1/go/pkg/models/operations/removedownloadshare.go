package operations

import (
"openapi/pkg/models/shared")

type RemoveDownloadSharePathParams struct {
    ShareID int64 `pathParam:"style=simple,explode=false,name=share_id"`
    
}

type RemoveDownloadShareHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type RemoveDownloadShareRequest struct {
    PathParams RemoveDownloadSharePathParams 
    Headers RemoveDownloadShareHeaders 
    
}

type RemoveDownloadShareResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

