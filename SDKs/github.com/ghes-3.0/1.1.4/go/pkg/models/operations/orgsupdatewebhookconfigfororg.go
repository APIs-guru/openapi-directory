package operations

import (
"openapi/pkg/models/shared")

type OrgsUpdateWebhookConfigForOrgPathParams struct {
    HookID int64 `pathParam:"style=simple,explode=false,name=hook_id"`
    Org string `pathParam:"style=simple,explode=false,name=org"`
    
}

type OrgsUpdateWebhookConfigForOrgRequestBody struct {
    ContentType *string `json:"content_type,omitempty"`
    InsecureSsl *interface{} `json:"insecure_ssl,omitempty"`
    Secret *string `json:"secret,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type OrgsUpdateWebhookConfigForOrgRequest struct {
    PathParams OrgsUpdateWebhookConfigForOrgPathParams 
    Request *OrgsUpdateWebhookConfigForOrgRequestBody `request:"mediaType=application/json"`
    
}

type OrgsUpdateWebhookConfigForOrgResponse struct {
    ContentType string 
    StatusCode int64 
    WebhookConfig *shared.WebhookConfig 
    
}

