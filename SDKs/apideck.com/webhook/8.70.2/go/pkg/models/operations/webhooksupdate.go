package operations

import (
"openapi/pkg/models/shared")

type WebhooksUpdatePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type WebhooksUpdateHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    
}

type WebhooksUpdateSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type WebhooksUpdateRequest struct {
    PathParams WebhooksUpdatePathParams 
    Headers WebhooksUpdateHeaders 
    Request shared.UpdateWebhookRequest `request:"mediaType=application/json"`
    Security WebhooksUpdateSecurity 
    
}

type WebhooksUpdateResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    UpdateWebhookResponse *shared.UpdateWebhookResponse 
    
}

