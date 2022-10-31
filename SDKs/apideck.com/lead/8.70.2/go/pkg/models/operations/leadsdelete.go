package operations

import (
"openapi/pkg/models/shared")

type LeadsDeletePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type LeadsDeleteQueryParams struct {
    Raw *bool `queryParam:"style=form,explode=true,name=raw"`
    
}

type LeadsDeleteHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    XApideckServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
    
}

type LeadsDeleteSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type LeadsDeleteRequest struct {
    PathParams LeadsDeletePathParams 
    QueryParams LeadsDeleteQueryParams 
    Headers LeadsDeleteHeaders 
    Security LeadsDeleteSecurity 
    
}

type LeadsDeleteResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    DeleteLeadResponse *shared.DeleteLeadResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}

