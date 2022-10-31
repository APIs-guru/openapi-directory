package operations

import (
"openapi/pkg/models/shared")

type ReposGetWebhookPathParams struct {
    HookID int64 `pathParam:"style=simple,explode=false,name=hook_id"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposGetWebhookRequest struct {
    PathParams ReposGetWebhookPathParams 
    
}

type ReposGetWebhookResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    Hook *shared.Hook 
    
}

