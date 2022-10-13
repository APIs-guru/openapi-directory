package operations

import (
	"openapi/pkg/models/shared"
)

type EmployeesAllQueryParams struct {
	Cursor *string                 `queryParam:"style=form,explode=true,name=cursor"`
	Filter *shared.EmployeesFilter `queryParam:"style=deepObject,explode=true,name=filter"`
	Limit  *int64                  `queryParam:"style=form,explode=true,name=limit"`
	Raw    *bool                   `queryParam:"style=form,explode=true,name=raw"`
}

type EmployeesAllHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type EmployeesAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type EmployeesAllRequest struct {
	QueryParams EmployeesAllQueryParams
	Headers     EmployeesAllHeaders
	Security    EmployeesAllSecurity
}

type EmployeesAllResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	GetEmployeesResponse    *shared.GetEmployeesResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
