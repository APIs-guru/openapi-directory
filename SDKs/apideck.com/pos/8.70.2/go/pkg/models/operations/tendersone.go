package operations

import (
"openapi/pkg/models/shared")

type TendersOnePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type TendersOneQueryParams struct {
    Raw *bool `queryParam:"style=form,explode=true,name=raw"`
    
}

type TendersOneHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    XApideckServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
    
}

type TendersOneSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type TendersOneRequest struct {
    PathParams TendersOnePathParams 
    QueryParams TendersOneQueryParams 
    Headers TendersOneHeaders 
    Security TendersOneSecurity 
    
}

type TendersOneResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    GetTenderResponse *shared.GetTenderResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}

