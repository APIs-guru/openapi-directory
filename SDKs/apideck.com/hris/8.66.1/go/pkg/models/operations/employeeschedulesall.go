package operations

import (
	"openapi/pkg/models/shared"
)

type EmployeeSchedulesAllPathParams struct {
	EmployeeID string `pathParam:"style=simple,explode=false,name=employee_id"`
}

type EmployeeSchedulesAllQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type EmployeeSchedulesAllHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type EmployeeSchedulesAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type EmployeeSchedulesAllRequest struct {
	PathParams  EmployeeSchedulesAllPathParams
	QueryParams EmployeeSchedulesAllQueryParams
	Headers     EmployeeSchedulesAllHeaders
	Security    EmployeeSchedulesAllSecurity
}

type EmployeeSchedulesAllResponse struct {
	BadRequestResponse           *shared.BadRequestResponse
	ContentType                  string
	GetEmployeeSchedulesResponse *shared.GetEmployeeSchedulesResponse
	NotFoundResponse             *shared.NotFoundResponse
	PaymentRequiredResponse      *shared.PaymentRequiredResponse
	StatusCode                   int64
	UnauthorizedResponse         *shared.UnauthorizedResponse
	UnexpectedErrorResponse      *shared.UnexpectedErrorResponse
	UnprocessableResponse        *shared.UnprocessableResponse
}
