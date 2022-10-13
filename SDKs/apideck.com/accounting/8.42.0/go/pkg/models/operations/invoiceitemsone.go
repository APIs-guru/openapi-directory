package operations

import (
	"openapi/pkg/models/shared"
)

type InvoiceItemsOnePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type InvoiceItemsOneQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type InvoiceItemsOneHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type InvoiceItemsOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type InvoiceItemsOneRequest struct {
	PathParams  InvoiceItemsOnePathParams
	QueryParams InvoiceItemsOneQueryParams
	Headers     InvoiceItemsOneHeaders
	Security    InvoiceItemsOneSecurity
}

type InvoiceItemsOneResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetInvoiceItemResponse  *shared.GetInvoiceItemResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
