package operations

import (
	"openapi/pkg/models/shared"
)

type EmployeesOnePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type EmployeesOneQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type EmployeesOneHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type EmployeesOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type EmployeesOneRequest struct {
	PathParams  EmployeesOnePathParams
	QueryParams EmployeesOneQueryParams
	Headers     EmployeesOneHeaders
	Security    EmployeesOneSecurity
}

type EmployeesOneResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	GetEmployeeResponse     *shared.GetEmployeeResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
