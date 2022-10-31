package operations

import (
"openapi/pkg/models/shared")

type NotesOnePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type NotesOneQueryParams struct {
    Raw *bool `queryParam:"style=form,explode=true,name=raw"`
    
}

type NotesOneHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    XApideckServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
    
}

type NotesOneSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type NotesOneRequest struct {
    PathParams NotesOnePathParams 
    QueryParams NotesOneQueryParams 
    Headers NotesOneHeaders 
    Security NotesOneSecurity 
    
}

type NotesOneResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    GetNoteResponse *shared.GetNoteResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}

