package operations

import (
"openapi/pkg/models/shared")

type LocationsOnePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type LocationsOneQueryParams struct {
    Raw *bool `queryParam:"style=form,explode=true,name=raw"`
    
}

type LocationsOneHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    XApideckServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
    
}

type LocationsOneSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type LocationsOneRequest struct {
    PathParams LocationsOnePathParams 
    QueryParams LocationsOneQueryParams 
    Headers LocationsOneHeaders 
    Security LocationsOneSecurity 
    
}

type LocationsOneResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    GetLocationResponse *shared.GetLocationResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}

