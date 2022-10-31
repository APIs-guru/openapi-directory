package operations

import (
"openapi/pkg/models/shared")

type HealthGetQueueWebhooksSecurity struct {
    Key shared.SchemeKey `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type HealthGetQueueWebhooksRequest struct {
    Security HealthGetQueueWebhooksSecurity 
    
}

type HealthGetQueueWebhooksResponse struct {
    ContentType string 
    StatusCode int64 
    
}

