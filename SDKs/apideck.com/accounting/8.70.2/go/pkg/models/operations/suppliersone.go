package operations

import (
"openapi/pkg/models/shared")

type SuppliersOnePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type SuppliersOneQueryParams struct {
    Raw *bool `queryParam:"style=form,explode=true,name=raw"`
    
}

type SuppliersOneHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    XApideckServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
    
}

type SuppliersOneSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type SuppliersOneRequest struct {
    PathParams SuppliersOnePathParams 
    QueryParams SuppliersOneQueryParams 
    Headers SuppliersOneHeaders 
    Security SuppliersOneSecurity 
    
}

type SuppliersOneResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    GetSupplierResponse *shared.GetSupplierResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}

