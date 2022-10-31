package operations

import (
"openapi/pkg/models/shared")

type OrdersDeletePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type OrdersDeleteQueryParams struct {
    Raw *bool `queryParam:"style=form,explode=true,name=raw"`
    
}

type OrdersDeleteHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    XApideckServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
    
}

type OrdersDeleteSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type OrdersDeleteRequest struct {
    PathParams OrdersDeletePathParams 
    QueryParams OrdersDeleteQueryParams 
    Headers OrdersDeleteHeaders 
    Security OrdersDeleteSecurity 
    
}

type OrdersDeleteResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    DeleteOrderResponse *shared.DeleteOrderResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}

