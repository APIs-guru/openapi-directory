package operations

import (
"openapi/pkg/models/shared")

type OrgsPingWebhookPathParams struct {
    HookID int64 `pathParam:"style=simple,explode=false,name=hook_id"`
    Org string `pathParam:"style=simple,explode=false,name=org"`
    
}

type OrgsPingWebhookRequest struct {
    PathParams OrgsPingWebhookPathParams 
    
}

type OrgsPingWebhookResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    
}

