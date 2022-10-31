package operations

import (
"openapi/pkg/models/shared")

type HealthGetQueueFunctionsSecurity struct {
    Key shared.SchemeKey `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type HealthGetQueueFunctionsRequest struct {
    Security HealthGetQueueFunctionsSecurity 
    
}

type HealthGetQueueFunctionsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

