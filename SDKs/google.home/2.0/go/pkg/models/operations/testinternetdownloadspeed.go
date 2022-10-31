package operations

import (
"openapi/pkg/models/shared")

type TestInternetDownloadSpeedRequest struct {
    Request shared.TestInternetDownloadSpeedRequest `request:"mediaType=application/json"`
    
}

type TestInternetDownloadSpeedResponse struct {
    ContentType string 
    Example16 *shared.Example16 
    StatusCode int64 
    
}

