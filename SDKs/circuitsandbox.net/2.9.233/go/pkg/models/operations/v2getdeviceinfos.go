package operations

import (
"openapi/pkg/models/shared")

type V2GetDeviceInfosSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type V2GetDeviceInfosRequest struct {
    Security V2GetDeviceInfosSecurity 
    
}

type V2GetDeviceInfosResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

