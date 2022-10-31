package operations

import (
"openapi/pkg/models/shared")

type ContactsDeletePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type ContactsDeleteQueryParams struct {
    Raw *bool `queryParam:"style=form,explode=true,name=raw"`
    
}

type ContactsDeleteHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    XApideckServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
    
}

type ContactsDeleteSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type ContactsDeleteRequest struct {
    PathParams ContactsDeletePathParams 
    QueryParams ContactsDeleteQueryParams 
    Headers ContactsDeleteHeaders 
    Security ContactsDeleteSecurity 
    
}

type ContactsDeleteResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    DeleteContactResponse *shared.DeleteContactResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}

