package operations

import (
	"openapi/pkg/models/shared"
)

type EmployeesDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type EmployeesDeleteQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type EmployeesDeleteHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type EmployeesDeleteSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type EmployeesDeleteRequest struct {
	PathParams  EmployeesDeletePathParams
	QueryParams EmployeesDeleteQueryParams
	Headers     EmployeesDeleteHeaders
	Security    EmployeesDeleteSecurity
}

type EmployeesDeleteResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	DeleteEmployeeResponse  *shared.DeleteEmployeeResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
