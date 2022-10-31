package operations

import (
"openapi/pkg/models/shared")

type OrderTypesOnePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type OrderTypesOneQueryParams struct {
    Raw *bool `queryParam:"style=form,explode=true,name=raw"`
    
}

type OrderTypesOneHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    XApideckServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
    
}

type OrderTypesOneSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type OrderTypesOneRequest struct {
    PathParams OrderTypesOnePathParams 
    QueryParams OrderTypesOneQueryParams 
    Headers OrderTypesOneHeaders 
    Security OrderTypesOneSecurity 
    
}

type OrderTypesOneResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    GetOrderTypeResponse *shared.GetOrderTypeResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}

