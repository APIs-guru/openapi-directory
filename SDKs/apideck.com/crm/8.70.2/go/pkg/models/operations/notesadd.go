package operations

import (
"openapi/pkg/models/shared")

type NotesAddQueryParams struct {
    Raw *bool `queryParam:"style=form,explode=true,name=raw"`
    
}

type NotesAddHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    XApideckServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
    
}

type NotesAddSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type NotesAddRequest struct {
    QueryParams NotesAddQueryParams 
    Headers NotesAddHeaders 
    Request shared.Note `request:"mediaType=application/json"`
    Security NotesAddSecurity 
    
}

type NotesAddResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    CreateNoteResponse *shared.CreateNoteResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}

