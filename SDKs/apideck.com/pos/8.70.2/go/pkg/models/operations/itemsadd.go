package operations

import (
"openapi/pkg/models/shared")

type ItemsAddQueryParams struct {
    Raw *bool `queryParam:"style=form,explode=true,name=raw"`
    
}

type ItemsAddHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    XApideckServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
    
}

type ItemsAddSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type ItemsAddRequest struct {
    QueryParams ItemsAddQueryParams 
    Headers ItemsAddHeaders 
    Request shared.Item `request:"mediaType=application/json"`
    Security ItemsAddSecurity 
    
}

type ItemsAddResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    CreateItemResponse *shared.CreateItemResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}

