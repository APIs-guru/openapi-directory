package operations

import (
"openapi/pkg/models/shared")

type CreateIncomingWebhookPathParams struct {
    ConversationID string `pathParam:"style=simple,explode=false,name=conversationId"`
    
}

type CreateIncomingWebhookQueryParams struct {
    Description *string `queryParam:"style=form,explode=true,name=description"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type CreateIncomingWebhookSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type CreateIncomingWebhookRequest struct {
    PathParams CreateIncomingWebhookPathParams 
    QueryParams CreateIncomingWebhookQueryParams 
    Security CreateIncomingWebhookSecurity 
    
}

type CreateIncomingWebhookResponse struct {
    Body []byte 
    ContentType string 
    IncomingWebhook *interface{} 
    StatusCode int64 
    
}

