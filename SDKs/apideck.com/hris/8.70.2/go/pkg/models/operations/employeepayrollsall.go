package operations

import (
	"openapi/pkg/models/shared"
)

type EmployeePayrollsAllPathParams struct {
	EmployeeID string `pathParam:"style=simple,explode=false,name=employee_id"`
}

type EmployeePayrollsAllQueryParams struct {
	Filter *shared.PayrollsFilter `queryParam:"style=deepObject,explode=true,name=filter"`
	Raw    *bool                  `queryParam:"style=form,explode=true,name=raw"`
}

type EmployeePayrollsAllHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type EmployeePayrollsAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type EmployeePayrollsAllRequest struct {
	PathParams  EmployeePayrollsAllPathParams
	QueryParams EmployeePayrollsAllQueryParams
	Headers     EmployeePayrollsAllHeaders
	Security    EmployeePayrollsAllSecurity
}

type EmployeePayrollsAllResponse struct {
	BadRequestResponse          *shared.BadRequestResponse
	ContentType                 string
	GetEmployeePayrollsResponse *shared.GetEmployeePayrollsResponse
	NotFoundResponse            *shared.NotFoundResponse
	PaymentRequiredResponse     *shared.PaymentRequiredResponse
	StatusCode                  int64
	UnauthorizedResponse        *shared.UnauthorizedResponse
	UnexpectedErrorResponse     *shared.UnexpectedErrorResponse
	UnprocessableResponse       *shared.UnprocessableResponse
}
