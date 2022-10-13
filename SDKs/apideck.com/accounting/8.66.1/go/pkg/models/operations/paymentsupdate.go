package operations

import (
	"openapi/pkg/models/shared"
)

type PaymentsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PaymentsUpdateQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type PaymentsUpdateHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type PaymentsUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PaymentsUpdateRequest struct {
	PathParams  PaymentsUpdatePathParams
	QueryParams PaymentsUpdateQueryParams
	Headers     PaymentsUpdateHeaders
	Request     shared.Payment `request:"mediaType=application/json"`
	Security    PaymentsUpdateSecurity
}

type PaymentsUpdateResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
	UpdatePaymentResponse   *shared.UpdatePaymentResponse
}
