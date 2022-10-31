package operations

import (
"openapi/pkg/models/shared")

type HealthGetQueueLogsSecurity struct {
    Key shared.SchemeKey `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type HealthGetQueueLogsRequest struct {
    Security HealthGetQueueLogsSecurity 
    
}

type HealthGetQueueLogsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

