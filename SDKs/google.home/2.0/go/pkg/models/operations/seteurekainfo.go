package operations

import (
"openapi/pkg/models/shared")

type SetEurekaInfoRequest struct {
    Request shared.SetEurekaInfoRequest `request:"mediaType=application/json"`
    
}

type SetEurekaInfoResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

