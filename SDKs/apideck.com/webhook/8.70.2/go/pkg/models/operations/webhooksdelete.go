package operations

import (
"openapi/pkg/models/shared")

type WebhooksDeletePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type WebhooksDeleteHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    
}

type WebhooksDeleteSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type WebhooksDeleteRequest struct {
    PathParams WebhooksDeletePathParams 
    Headers WebhooksDeleteHeaders 
    Security WebhooksDeleteSecurity 
    
}

type WebhooksDeleteResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    DeleteWebhookResponse *shared.DeleteWebhookResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}

