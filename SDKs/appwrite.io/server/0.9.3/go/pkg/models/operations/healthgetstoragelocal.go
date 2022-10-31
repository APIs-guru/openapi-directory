package operations

import (
"openapi/pkg/models/shared")

type HealthGetStorageLocalSecurity struct {
    Key shared.SchemeKey `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type HealthGetStorageLocalRequest struct {
    Security HealthGetStorageLocalSecurity 
    
}

type HealthGetStorageLocalResponse struct {
    ContentType string 
    StatusCode int64 
    
}

