package operations

import (
"openapi/pkg/models/shared")

type HealthGetDbSecurity struct {
    Key shared.SchemeKey `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type HealthGetDbRequest struct {
    Security HealthGetDbSecurity 
    
}

type HealthGetDbResponse struct {
    ContentType string 
    StatusCode int64 
    
}

