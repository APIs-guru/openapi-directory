package operations

import (
	"openapi/pkg/models/shared"
)

type PaymentsDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PaymentsDeleteQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type PaymentsDeleteHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type PaymentsDeleteSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PaymentsDeleteRequest struct {
	PathParams  PaymentsDeletePathParams
	QueryParams PaymentsDeleteQueryParams
	Headers     PaymentsDeleteHeaders
	Security    PaymentsDeleteSecurity
}

type PaymentsDeleteResponse struct {
	BadRequestResponse       *interface{}
	ContentType              string
	DeletePosPaymentResponse *shared.DeletePosPaymentResponse
	NotFoundResponse         *interface{}
	PaymentRequiredResponse  *interface{}
	StatusCode               int64
	UnauthorizedResponse     *interface{}
	UnexpectedErrorResponse  *interface{}
	UnprocessableResponse    *interface{}
}
