package operations

import (
	"openapi/pkg/models/shared"
)

type PaymentsOnePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PaymentsOneQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type PaymentsOneHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type PaymentsOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PaymentsOneRequest struct {
	PathParams  PaymentsOnePathParams
	QueryParams PaymentsOneQueryParams
	Headers     PaymentsOneHeaders
	Security    PaymentsOneSecurity
}

type PaymentsOneResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetPosPaymentResponse   *shared.GetPosPaymentResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
