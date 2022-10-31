package operations

import (
"openapi/pkg/models/shared")

type TimeOffRequestsAddQueryParams struct {
    Raw *bool `queryParam:"style=form,explode=true,name=raw"`
    
}

type TimeOffRequestsAddHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    XApideckServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
    
}

type TimeOffRequestsAddSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type TimeOffRequestsAddRequest struct {
    QueryParams TimeOffRequestsAddQueryParams 
    Headers TimeOffRequestsAddHeaders 
    Request shared.TimeOffRequest `request:"mediaType=application/json"`
    Security TimeOffRequestsAddSecurity 
    
}

type TimeOffRequestsAddResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    CreateTimeOffRequestResponse *shared.CreateTimeOffRequestResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}

