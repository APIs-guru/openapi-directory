package operations

import (
	"openapi/pkg/models/shared"
)

type PayrollsAllQueryParams struct {
	Filter *shared.PayrollsFilter `queryParam:"style=deepObject,explode=true,name=filter"`
	Raw    *bool                  `queryParam:"style=form,explode=true,name=raw"`
}

type PayrollsAllHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type PayrollsAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PayrollsAllRequest struct {
	QueryParams PayrollsAllQueryParams
	Headers     PayrollsAllHeaders
	Security    PayrollsAllSecurity
}

type PayrollsAllResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	GetPayrollsResponse     *shared.GetPayrollsResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
