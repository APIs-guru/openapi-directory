package operations

import (
	"openapi/pkg/models/shared"
)

type PaymentsAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type PaymentsAddHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type PaymentsAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PaymentsAddRequest struct {
	QueryParams PaymentsAddQueryParams
	Headers     PaymentsAddHeaders
	Request     shared.PosPayment `request:"mediaType=application/json"`
	Security    PaymentsAddSecurity
}

type PaymentsAddResponse struct {
	BadRequestResponse       *shared.BadRequestResponse
	ContentType              string
	CreatePosPaymentResponse *shared.CreatePosPaymentResponse
	NotFoundResponse         *shared.NotFoundResponse
	PaymentRequiredResponse  *shared.PaymentRequiredResponse
	StatusCode               int64
	UnauthorizedResponse     *shared.UnauthorizedResponse
	UnexpectedErrorResponse  *shared.UnexpectedErrorResponse
	UnprocessableResponse    *shared.UnprocessableResponse
}
