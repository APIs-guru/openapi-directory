package operations

import (
"openapi/pkg/models/shared")

type CompaniesAllQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Raw *bool `queryParam:"style=form,explode=true,name=raw"`
    
}

type CompaniesAllHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    XApideckServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
    
}

type CompaniesAllSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type CompaniesAllRequest struct {
    QueryParams CompaniesAllQueryParams 
    Headers CompaniesAllHeaders 
    Security CompaniesAllSecurity 
    
}

type CompaniesAllResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    GetHrisCompaniesResponse *shared.GetHrisCompaniesResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}

