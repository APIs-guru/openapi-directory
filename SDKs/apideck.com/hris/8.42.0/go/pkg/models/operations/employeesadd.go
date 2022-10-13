package operations

import (
	"openapi/pkg/models/shared"
)

type EmployeesAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type EmployeesAddHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type EmployeesAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type EmployeesAddRequest struct {
	QueryParams EmployeesAddQueryParams
	Headers     EmployeesAddHeaders
	Request     shared.Employee `request:"mediaType=application/json"`
	Security    EmployeesAddSecurity
}

type EmployeesAddResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	CreateEmployeeResponse  *shared.CreateEmployeeResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
