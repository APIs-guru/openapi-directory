package operations

import (
"openapi/pkg/models/shared")

type ReposGetWebhookConfigForRepoPathParams struct {
    HookID int64 `pathParam:"style=simple,explode=false,name=hook_id"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposGetWebhookConfigForRepoRequest struct {
    PathParams ReposGetWebhookConfigForRepoPathParams 
    
}

type ReposGetWebhookConfigForRepoResponse struct {
    ContentType string 
    StatusCode int64 
    WebhookConfig *shared.WebhookConfig 
    
}

