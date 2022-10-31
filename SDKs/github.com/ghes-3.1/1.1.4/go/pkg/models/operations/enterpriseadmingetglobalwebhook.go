package operations

import (
"openapi/pkg/models/shared")

type EnterpriseAdminGetGlobalWebhookPathParams struct {
    HookID int64 `pathParam:"style=simple,explode=false,name=hook_id"`
    
}

type EnterpriseAdminGetGlobalWebhookHeaders struct {
    Accept string `header:"style=simple,explode=false,name=accept"`
    
}

type EnterpriseAdminGetGlobalWebhookRequest struct {
    PathParams EnterpriseAdminGetGlobalWebhookPathParams 
    Headers EnterpriseAdminGetGlobalWebhookHeaders 
    
}

type EnterpriseAdminGetGlobalWebhookResponse struct {
    ContentType string 
    StatusCode int64 
    GlobalHook *shared.GlobalHook 
    
}

