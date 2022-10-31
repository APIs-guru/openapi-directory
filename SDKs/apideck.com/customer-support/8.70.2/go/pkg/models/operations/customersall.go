package operations

import (
"openapi/pkg/models/shared")

type CustomersAllQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Raw *bool `queryParam:"style=form,explode=true,name=raw"`
    
}

type CustomersAllHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    XApideckServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
    
}

type CustomersAllSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type CustomersAllRequest struct {
    QueryParams CustomersAllQueryParams 
    Headers CustomersAllHeaders 
    Security CustomersAllSecurity 
    
}

type CustomersAllResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    GetCustomerSupportCustomersResponse *shared.GetCustomerSupportCustomersResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}

