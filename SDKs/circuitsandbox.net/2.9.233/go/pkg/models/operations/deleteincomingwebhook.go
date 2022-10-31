package operations

import (
"openapi/pkg/models/shared")

type DeleteIncomingWebhookPathParams struct {
    WebhookID string `pathParam:"style=simple,explode=false,name=webhookId"`
    
}

type DeleteIncomingWebhookSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type DeleteIncomingWebhookRequest struct {
    PathParams DeleteIncomingWebhookPathParams 
    Security DeleteIncomingWebhookSecurity 
    
}

type DeleteIncomingWebhookResponse struct {
    ContentType string 
    StatusCode int64 
    
}

