package operations

import (
"openapi/pkg/models/shared")

type InvoicesUpdatePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type InvoicesUpdateQueryParams struct {
    Raw *bool `queryParam:"style=form,explode=true,name=raw"`
    
}

type InvoicesUpdateHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    XApideckServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
    
}

type InvoicesUpdateSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type InvoicesUpdateRequest struct {
    PathParams InvoicesUpdatePathParams 
    QueryParams InvoicesUpdateQueryParams 
    Headers InvoicesUpdateHeaders 
    Request shared.Invoice `request:"mediaType=application/json"`
    Security InvoicesUpdateSecurity 
    
}

type InvoicesUpdateResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    UpdateInvoiceResponse *shared.UpdateInvoiceResponse 
    
}

