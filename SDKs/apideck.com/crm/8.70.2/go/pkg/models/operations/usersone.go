package operations

import (
"openapi/pkg/models/shared")

type UsersOnePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type UsersOneQueryParams struct {
    Raw *bool `queryParam:"style=form,explode=true,name=raw"`
    
}

type UsersOneHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    XApideckServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
    
}

type UsersOneSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type UsersOneRequest struct {
    PathParams UsersOnePathParams 
    QueryParams UsersOneQueryParams 
    Headers UsersOneHeaders 
    Security UsersOneSecurity 
    
}

type UsersOneResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    GetUserResponse *shared.GetUserResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}

