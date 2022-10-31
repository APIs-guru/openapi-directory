package operations

import (
"openapi/pkg/models/shared")

type PipelinesOnePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PipelinesOneQueryParams struct {
    Raw *bool `queryParam:"style=form,explode=true,name=raw"`
    
}

type PipelinesOneHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    XApideckServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
    
}

type PipelinesOneSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PipelinesOneRequest struct {
    PathParams PipelinesOnePathParams 
    QueryParams PipelinesOneQueryParams 
    Headers PipelinesOneHeaders 
    Security PipelinesOneSecurity 
    
}

type PipelinesOneResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    GetPipelineResponse *shared.GetPipelineResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}

