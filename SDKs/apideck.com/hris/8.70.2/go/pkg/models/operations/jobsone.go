package operations

import (
"openapi/pkg/models/shared")

type JobsOnePathParams struct {
    EmployeeID string `pathParam:"style=simple,explode=false,name=employee_id"`
    JobID string `pathParam:"style=simple,explode=false,name=job_id"`
    
}

type JobsOneQueryParams struct {
    Raw *bool `queryParam:"style=form,explode=true,name=raw"`
    
}

type JobsOneHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    XApideckServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
    
}

type JobsOneSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type JobsOneRequest struct {
    PathParams JobsOnePathParams 
    QueryParams JobsOneQueryParams 
    Headers JobsOneHeaders 
    Security JobsOneSecurity 
    
}

type JobsOneResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    GetHrisJobResponse *shared.GetHrisJobResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}

