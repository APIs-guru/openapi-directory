package operations

import (
"openapi/pkg/models/shared")

type UpdateDownloadSharesHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type UpdateDownloadSharesRequest struct {
    Headers UpdateDownloadSharesHeaders 
    Request shared.UpdateDownloadSharesBulkRequest `request:"mediaType=application/json"`
    
}

type UpdateDownloadSharesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

