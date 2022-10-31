package operations

import (
"openapi/pkg/models/shared")

type WebhooksExecutePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
    
}

type WebhooksExecuteSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type WebhooksExecuteRequest struct {
    PathParams WebhooksExecutePathParams 
    Request interface{} `request:"mediaType=application/json"`
    Security WebhooksExecuteSecurity 
    
}

type WebhooksExecuteResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    ExecuteWebhookResponse *shared.ExecuteWebhookResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}

