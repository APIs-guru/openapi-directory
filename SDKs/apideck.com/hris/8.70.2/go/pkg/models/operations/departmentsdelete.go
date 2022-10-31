package operations

import (
"openapi/pkg/models/shared")

type DepartmentsDeletePathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DepartmentsDeleteQueryParams struct {
    Raw *bool `queryParam:"style=form,explode=true,name=raw"`
    
}

type DepartmentsDeleteHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    XApideckServiceID *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
    
}

type DepartmentsDeleteSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type DepartmentsDeleteRequest struct {
    PathParams DepartmentsDeletePathParams 
    QueryParams DepartmentsDeleteQueryParams 
    Headers DepartmentsDeleteHeaders 
    Security DepartmentsDeleteSecurity 
    
}

type DepartmentsDeleteResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    DeleteDepartmentResponse *shared.DeleteDepartmentResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}

