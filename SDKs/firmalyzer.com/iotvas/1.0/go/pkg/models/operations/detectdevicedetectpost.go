package operations

import (
"openapi/pkg/models/shared")

type DetectDeviceDetectPostSecurity struct {
    APIKeyHeader shared.SchemeAPIKeyHeader `security:"scheme,type=apiKey,subtype=header"`
    
}

type DetectDeviceDetectPostRequest struct {
    Request shared.DeviceFeatures `request:"mediaType=application/json"`
    Security DetectDeviceDetectPostSecurity 
    
}

type DetectDeviceDetectPostResponse struct {
    ContentType string 
    DeviceInfo *shared.DeviceInfo 
    HTTPValidationError *shared.HTTPValidationError 
    StatusCode int64 
    
}

