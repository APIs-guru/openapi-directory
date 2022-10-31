package operations

import (
	"openapi/pkg/models/shared"
)

type InvoicesOnePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type InvoicesOneQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type InvoicesOneHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type InvoicesOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type InvoicesOneRequest struct {
	PathParams  InvoicesOnePathParams
	QueryParams InvoicesOneQueryParams
	Headers     InvoicesOneHeaders
	Security    InvoicesOneSecurity
}

type InvoicesOneResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	GetInvoiceResponse      *shared.GetInvoiceResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
