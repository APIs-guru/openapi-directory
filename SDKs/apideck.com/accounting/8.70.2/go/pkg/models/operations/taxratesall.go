package operations

import (
"openapi/pkg/models/shared")

type TaxRatesAllQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    Filter *shared.TaxRatesFilter `queryParam:"style=deepObject,explode=true,name=filter"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Raw *bool `queryParam:"style=form,explode=true,name=raw"`
    
}

type TaxRatesAllHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    XApideckServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
    
}

type TaxRatesAllSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type TaxRatesAllRequest struct {
    QueryParams TaxRatesAllQueryParams 
    Headers TaxRatesAllHeaders 
    Security TaxRatesAllSecurity 
    
}

type TaxRatesAllResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    GetTaxRatesResponse *shared.GetTaxRatesResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}

