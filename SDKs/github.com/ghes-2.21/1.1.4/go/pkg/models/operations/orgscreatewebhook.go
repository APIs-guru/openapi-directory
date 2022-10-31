package operations

import (
"openapi/pkg/models/shared")

type OrgsCreateWebhookPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    
}

type OrgsCreateWebhookRequestBodyConfig struct {
    ContentType *string `json:"content_type,omitempty"`
    InsecureSsl *interface{} `json:"insecure_ssl,omitempty"`
    Password *string `json:"password,omitempty"`
    Secret *string `json:"secret,omitempty"`
    URL string `json:"url"`
    Username *string `json:"username,omitempty"`
    
}

type OrgsCreateWebhookRequestBody struct {
    Active *bool `json:"active,omitempty"`
    Config OrgsCreateWebhookRequestBodyConfig `json:"config"`
    Events []string `json:"events,omitempty"`
    Name string `json:"name"`
    
}

type OrgsCreateWebhookRequest struct {
    PathParams OrgsCreateWebhookPathParams 
    Request *OrgsCreateWebhookRequestBody `request:"mediaType=application/json"`
    
}

type OrgsCreateWebhookResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    OrgHook *shared.OrgHook 
    ValidationError *shared.ValidationError 
    
}

