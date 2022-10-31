package operations

import (
"openapi/pkg/models/shared")

type OrgsGetWebhookPathParams struct {
    HookID int64 `pathParam:"style=simple,explode=false,name=hook_id"`
    Org string `pathParam:"style=simple,explode=false,name=org"`
    
}

type OrgsGetWebhookRequest struct {
    PathParams OrgsGetWebhookPathParams 
    
}

type OrgsGetWebhookResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    OrgHook *shared.OrgHook 
    
}

