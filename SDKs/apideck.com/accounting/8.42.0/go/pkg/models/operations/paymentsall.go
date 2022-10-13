package operations

import (
	"openapi/pkg/models/shared"
)

type PaymentsAllQueryParams struct {
	Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
	Limit  *int64  `queryParam:"style=form,explode=true,name=limit"`
	Raw    *bool   `queryParam:"style=form,explode=true,name=raw"`
}

type PaymentsAllHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type PaymentsAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PaymentsAllRequest struct {
	QueryParams PaymentsAllQueryParams
	Headers     PaymentsAllHeaders
	Security    PaymentsAllSecurity
}

type PaymentsAllResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetPaymentsResponse     *shared.GetPaymentsResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
