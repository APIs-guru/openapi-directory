package operations

import (
	"openapi/pkg/models/shared"
)

type EmployeePayrollsOnePathParams struct {
	EmployeeID string `pathParam:"style=simple,explode=false,name=employee_id"`
	PayrollID  string `pathParam:"style=simple,explode=false,name=payroll_id"`
}

type EmployeePayrollsOneQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type EmployeePayrollsOneHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type EmployeePayrollsOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type EmployeePayrollsOneRequest struct {
	PathParams  EmployeePayrollsOnePathParams
	QueryParams EmployeePayrollsOneQueryParams
	Headers     EmployeePayrollsOneHeaders
	Security    EmployeePayrollsOneSecurity
}

type EmployeePayrollsOneResponse struct {
	BadRequestResponse         *shared.BadRequestResponse
	ContentType                string
	GetEmployeePayrollResponse *shared.GetEmployeePayrollResponse
	NotFoundResponse           *shared.NotFoundResponse
	PaymentRequiredResponse    *shared.PaymentRequiredResponse
	StatusCode                 int64
	UnauthorizedResponse       *shared.UnauthorizedResponse
	UnexpectedErrorResponse    *shared.UnexpectedErrorResponse
	UnprocessableResponse      *shared.UnprocessableResponse
}
