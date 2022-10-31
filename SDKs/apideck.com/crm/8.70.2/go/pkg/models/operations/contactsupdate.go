package operations

import (
"openapi/pkg/models/shared")

type ContactsUpdatePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type ContactsUpdateQueryParams struct {
    Raw *bool `queryParam:"style=form,explode=true,name=raw"`
    
}

type ContactsUpdateHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    XApideckServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
    
}

type ContactsUpdateSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type ContactsUpdateRequest struct {
    PathParams ContactsUpdatePathParams 
    QueryParams ContactsUpdateQueryParams 
    Headers ContactsUpdateHeaders 
    Request shared.Contact `request:"mediaType=application/json"`
    Security ContactsUpdateSecurity 
    
}

type ContactsUpdateResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    UpdateContactResponse *shared.UpdateContactResponse 
    
}

