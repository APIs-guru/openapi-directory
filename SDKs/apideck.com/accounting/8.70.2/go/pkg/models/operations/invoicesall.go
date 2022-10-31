package operations

import (
"openapi/pkg/models/shared")

type InvoicesAllQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Raw *bool `queryParam:"style=form,explode=true,name=raw"`
    Sort *shared.InvoicesSort `queryParam:"style=deepObject,explode=true,name=sort"`
    
}

type InvoicesAllHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    XApideckServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
    
}

type InvoicesAllSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type InvoicesAllRequest struct {
    QueryParams InvoicesAllQueryParams 
    Headers InvoicesAllHeaders 
    Security InvoicesAllSecurity 
    
}

type InvoicesAllResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    GetInvoicesResponse *shared.GetInvoicesResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}

