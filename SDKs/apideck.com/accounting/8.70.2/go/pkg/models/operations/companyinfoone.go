package operations

import (
"openapi/pkg/models/shared")

type CompanyInfoOneQueryParams struct {
    Raw *bool `queryParam:"style=form,explode=true,name=raw"`
    
}

type CompanyInfoOneHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    XApideckServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
    
}

type CompanyInfoOneSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type CompanyInfoOneRequest struct {
    QueryParams CompanyInfoOneQueryParams 
    Headers CompanyInfoOneHeaders 
    Security CompanyInfoOneSecurity 
    
}

type CompanyInfoOneResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    GetCompanyInfoResponse *shared.GetCompanyInfoResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}

