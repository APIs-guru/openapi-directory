package operations

import (
"openapi/pkg/models/shared")

type MessagesDeletePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type MessagesDeleteQueryParams struct {
    Raw *bool `queryParam:"style=form,explode=true,name=raw"`
    
}

type MessagesDeleteHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    XApideckServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
    
}

type MessagesDeleteSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type MessagesDeleteRequest struct {
    PathParams MessagesDeletePathParams 
    QueryParams MessagesDeleteQueryParams 
    Headers MessagesDeleteHeaders 
    Security MessagesDeleteSecurity 
    
}

type MessagesDeleteResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    DeleteMessageResponse *shared.DeleteMessageResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}

