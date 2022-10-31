package operations

import (
"openapi/pkg/models/shared")

type TimeOffRequestsOnePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type TimeOffRequestsOneQueryParams struct {
    Raw *bool `queryParam:"style=form,explode=true,name=raw"`
    
}

type TimeOffRequestsOneHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    XApideckServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
    
}

type TimeOffRequestsOneSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type TimeOffRequestsOneRequest struct {
    PathParams TimeOffRequestsOnePathParams 
    QueryParams TimeOffRequestsOneQueryParams 
    Headers TimeOffRequestsOneHeaders 
    Security TimeOffRequestsOneSecurity 
    
}

type TimeOffRequestsOneResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    GetTimeOffRequestResponse *shared.GetTimeOffRequestResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}

