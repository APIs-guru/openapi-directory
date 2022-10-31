package operations

import (
"openapi/pkg/models/shared")

type WebhooksAddHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    
}

type WebhooksAddSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type WebhooksAddRequest struct {
    Headers WebhooksAddHeaders 
    Request shared.CreateWebhookRequest `request:"mediaType=application/json"`
    Security WebhooksAddSecurity 
    
}

type WebhooksAddResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    CreateWebhookResponse *shared.CreateWebhookResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}

