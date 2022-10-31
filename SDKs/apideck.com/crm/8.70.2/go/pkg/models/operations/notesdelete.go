package operations

import (
"openapi/pkg/models/shared")

type NotesDeletePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type NotesDeleteQueryParams struct {
    Raw *bool `queryParam:"style=form,explode=true,name=raw"`
    
}

type NotesDeleteHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    XApideckServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
    
}

type NotesDeleteSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type NotesDeleteRequest struct {
    PathParams NotesDeletePathParams 
    QueryParams NotesDeleteQueryParams 
    Headers NotesDeleteHeaders 
    Security NotesDeleteSecurity 
    
}

type NotesDeleteResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    DeleteNoteResponse *shared.DeleteNoteResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}

