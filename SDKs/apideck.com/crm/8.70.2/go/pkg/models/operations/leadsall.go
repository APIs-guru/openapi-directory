package operations

import (
"openapi/pkg/models/shared")

type LeadsAllQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    Filter *shared.LeadsFilter `queryParam:"style=deepObject,explode=true,name=filter"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Raw *bool `queryParam:"style=form,explode=true,name=raw"`
    Sort *shared.LeadsSort `queryParam:"style=deepObject,explode=true,name=sort"`
    
}

type LeadsAllHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    XApideckServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
    
}

type LeadsAllSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type LeadsAllRequest struct {
    QueryParams LeadsAllQueryParams 
    Headers LeadsAllHeaders 
    Security LeadsAllSecurity 
    
}

type LeadsAllResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    GetLeadsResponse *shared.GetLeadsResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}

