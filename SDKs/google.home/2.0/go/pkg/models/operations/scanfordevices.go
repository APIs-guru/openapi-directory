package operations

import (
"openapi/pkg/models/shared")

type ScanfordevicesRequest struct {
    Request shared.ScanfordevicesRequest `request:"mediaType=application/json"`
    
}

type ScanfordevicesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

