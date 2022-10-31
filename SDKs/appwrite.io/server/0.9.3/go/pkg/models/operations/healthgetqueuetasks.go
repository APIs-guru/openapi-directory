package operations

import (
"openapi/pkg/models/shared")

type HealthGetQueueTasksSecurity struct {
    Key shared.SchemeKey `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type HealthGetQueueTasksRequest struct {
    Security HealthGetQueueTasksSecurity 
    
}

type HealthGetQueueTasksResponse struct {
    ContentType string 
    StatusCode int64 
    
}

