package operations

import (
	"openapi/pkg/models/shared"
)

type PayrollsOnePathParams struct {
	PayrollID string `pathParam:"style=simple,explode=false,name=payroll_id"`
}

type PayrollsOneQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type PayrollsOneHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type PayrollsOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PayrollsOneRequest struct {
	PathParams  PayrollsOnePathParams
	QueryParams PayrollsOneQueryParams
	Headers     PayrollsOneHeaders
	Security    PayrollsOneSecurity
}

type PayrollsOneResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	GetPayrollResponse      *shared.GetPayrollResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
