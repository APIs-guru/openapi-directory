package operations

import (
"openapi/pkg/models/shared")

type DepartmentsOnePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DepartmentsOneQueryParams struct {
    Raw *bool `queryParam:"style=form,explode=true,name=raw"`
    
}

type DepartmentsOneHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    XApideckServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
    
}

type DepartmentsOneSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type DepartmentsOneRequest struct {
    PathParams DepartmentsOnePathParams 
    QueryParams DepartmentsOneQueryParams 
    Headers DepartmentsOneHeaders 
    Security DepartmentsOneSecurity 
    
}

type DepartmentsOneResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    GetDepartmentResponse *shared.GetDepartmentResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}

