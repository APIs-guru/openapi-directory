package operations

import (
	"openapi/pkg/models/shared"
)

type PaymentsAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type PaymentsAddHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type PaymentsAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PaymentsAddRequest struct {
	QueryParams PaymentsAddQueryParams
	Headers     PaymentsAddHeaders
	Request     shared.Payment `request:"mediaType=application/json"`
	Security    PaymentsAddSecurity
}

type PaymentsAddResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	CreatePaymentResponse   *shared.CreatePaymentResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
