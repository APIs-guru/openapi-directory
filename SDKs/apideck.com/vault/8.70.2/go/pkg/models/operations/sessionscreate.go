package operations

import (
"openapi/pkg/models/shared")

type SessionsCreateHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    
}

type SessionsCreateSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type SessionsCreateRequest struct {
    Headers SessionsCreateHeaders 
    Request *shared.Session `request:"mediaType=application/json"`
    Security SessionsCreateSecurity 
    
}

type SessionsCreateResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    CreateSessionResponse *shared.CreateSessionResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}

