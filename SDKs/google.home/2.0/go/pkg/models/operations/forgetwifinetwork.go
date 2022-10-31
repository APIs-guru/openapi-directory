package operations

import (
"openapi/pkg/models/shared")

type ForgetWiFiNetworkRequest struct {
    Request shared.ForgetWiFiNetworkRequest `request:"mediaType=application/json"`
    
}

type ForgetWiFiNetworkResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

