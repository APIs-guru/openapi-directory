package operations

import (
	"openapi/pkg/models/shared"
)

type EmployeesUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type EmployeesUpdateQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type EmployeesUpdateHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type EmployeesUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type EmployeesUpdateRequest struct {
	PathParams  EmployeesUpdatePathParams
	QueryParams EmployeesUpdateQueryParams
	Headers     EmployeesUpdateHeaders
	Request     shared.Employee `request:"mediaType=application/json"`
	Security    EmployeesUpdateSecurity
}

type EmployeesUpdateResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
	UpdateEmployeeResponse  *shared.UpdateEmployeeResponse
}
