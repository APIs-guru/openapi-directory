package operations

import (
"openapi/pkg/models/shared")

type ReposUpdateWebhookConfigForRepoPathParams struct {
    HookID int64 `pathParam:"style=simple,explode=false,name=hook_id"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposUpdateWebhookConfigForRepoRequestBody struct {
    ContentType *string `json:"content_type,omitempty"`
    InsecureSsl *interface{} `json:"insecure_ssl,omitempty"`
    Secret *string `json:"secret,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ReposUpdateWebhookConfigForRepoRequest struct {
    PathParams ReposUpdateWebhookConfigForRepoPathParams 
    Request *ReposUpdateWebhookConfigForRepoRequestBody `request:"mediaType=application/json"`
    
}

type ReposUpdateWebhookConfigForRepoResponse struct {
    ContentType string 
    StatusCode int64 
    WebhookConfig *shared.WebhookConfig 
    
}

