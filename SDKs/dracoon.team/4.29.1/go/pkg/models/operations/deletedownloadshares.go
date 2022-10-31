package operations

import (
"openapi/pkg/models/shared")

type DeleteDownloadSharesHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type DeleteDownloadSharesRequest struct {
    Headers DeleteDownloadSharesHeaders 
    Request shared.DeleteDownloadSharesRequest `request:"mediaType=application/json"`
    
}

type DeleteDownloadSharesResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}

