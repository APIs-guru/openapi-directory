package operations

import (
"openapi/pkg/models/shared")

type CreditNotesAddQueryParams struct {
    Raw *bool `queryParam:"style=form,explode=true,name=raw"`
    
}

type CreditNotesAddHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    XApideckServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
    
}

type CreditNotesAddSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type CreditNotesAddRequest struct {
    QueryParams CreditNotesAddQueryParams 
    Headers CreditNotesAddHeaders 
    Request shared.CreditNote `request:"mediaType=application/json"`
    Security CreditNotesAddSecurity 
    
}

type CreditNotesAddResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    CreateCreditNoteResponse *shared.CreateCreditNoteResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}

