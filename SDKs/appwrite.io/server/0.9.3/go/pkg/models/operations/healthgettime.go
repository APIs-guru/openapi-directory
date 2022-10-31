package operations

import (
"openapi/pkg/models/shared")

type HealthGetTimeSecurity struct {
    Key shared.SchemeKey `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type HealthGetTimeRequest struct {
    Security HealthGetTimeSecurity 
    
}

type HealthGetTimeResponse struct {
    ContentType string 
    StatusCode int64 
    
}

