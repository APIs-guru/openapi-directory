package operations

import (
"openapi/pkg/models/shared")

type TendersAllQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Raw *bool `queryParam:"style=form,explode=true,name=raw"`
    
}

type TendersAllHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    XApideckServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
    
}

type TendersAllSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type TendersAllRequest struct {
    QueryParams TendersAllQueryParams 
    Headers TendersAllHeaders 
    Security TendersAllSecurity 
    
}

type TendersAllResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    GetTendersResponse *shared.GetTendersResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}

