package operations

import (
"openapi/pkg/models/shared")

type OrdersUpdatePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type OrdersUpdateQueryParams struct {
    Raw *bool `queryParam:"style=form,explode=true,name=raw"`
    
}

type OrdersUpdateHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    XApideckServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
    
}

type OrdersUpdateSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type OrdersUpdateRequest struct {
    PathParams OrdersUpdatePathParams 
    QueryParams OrdersUpdateQueryParams 
    Headers OrdersUpdateHeaders 
    Request shared.Order `request:"mediaType=application/json"`
    Security OrdersUpdateSecurity 
    
}

type OrdersUpdateResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    UpdateOrderResponse *shared.UpdateOrderResponse 
    
}

