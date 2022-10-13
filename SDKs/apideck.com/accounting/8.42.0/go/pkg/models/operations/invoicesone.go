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
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
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
	BadRequestResponse      *interface{}
	ContentType             string
	GetInvoiceResponse      *shared.GetInvoiceResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
