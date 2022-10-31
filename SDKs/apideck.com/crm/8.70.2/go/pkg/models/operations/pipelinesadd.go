package operations

import (
"openapi/pkg/models/shared")

type PipelinesAddQueryParams struct {
    Raw *bool `queryParam:"style=form,explode=true,name=raw"`
    
}

type PipelinesAddHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    XApideckServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
    
}

type PipelinesAddSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PipelinesAddRequest struct {
    QueryParams PipelinesAddQueryParams 
    Headers PipelinesAddHeaders 
    Request shared.Pipeline `request:"mediaType=application/json"`
    Security PipelinesAddSecurity 
    
}

type PipelinesAddResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    CreatePipelineResponse *shared.CreatePipelineResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}

