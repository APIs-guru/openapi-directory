package operations

import (
"openapi/pkg/models/shared")

type LocationsAddQueryParams struct {
    Raw *bool `queryParam:"style=form,explode=true,name=raw"`
    
}

type LocationsAddHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    XApideckServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
    
}

type LocationsAddSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type LocationsAddRequest struct {
    QueryParams LocationsAddQueryParams 
    Headers LocationsAddHeaders 
    Request shared.Location `request:"mediaType=application/json"`
    Security LocationsAddSecurity 
    
}

type LocationsAddResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    CreateLocationResponse *shared.CreateLocationResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}

