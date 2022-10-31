package operations

import (
"openapi/pkg/models/shared")

type OrdersAddQueryParams struct {
    Raw *bool `queryParam:"style=form,explode=true,name=raw"`
    
}

type OrdersAddHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    XApideckServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
    
}

type OrdersAddSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type OrdersAddRequest struct {
    QueryParams OrdersAddQueryParams 
    Headers OrdersAddHeaders 
    Request shared.Order `request:"mediaType=application/json"`
    Security OrdersAddSecurity 
    
}

type OrdersAddResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    CreateOrderResponse *shared.CreateOrderResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}

