package operations

import (
"openapi/pkg/models/shared")

type LogsAllQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    Filter *shared.LogsFilter `queryParam:"style=deepObject,explode=true,name=filter"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    
}

type LogsAllHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    
}

type LogsAllSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type LogsAllRequest struct {
    QueryParams LogsAllQueryParams 
    Headers LogsAllHeaders 
    Security LogsAllSecurity 
    
}

type LogsAllResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    GetLogsResponse *shared.GetLogsResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}

