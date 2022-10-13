package operations

import (
	"openapi/pkg/models/shared"
)

type InvoiceItemsAllQueryParams struct {
	Cursor *string                    `queryParam:"style=form,explode=true,name=cursor"`
	Filter *shared.InvoiceItemsFilter `queryParam:"style=deepObject,explode=true,name=filter"`
	Limit  *int64                     `queryParam:"style=form,explode=true,name=limit"`
	Raw    *bool                      `queryParam:"style=form,explode=true,name=raw"`
}

type InvoiceItemsAllHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type InvoiceItemsAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type InvoiceItemsAllRequest struct {
	QueryParams InvoiceItemsAllQueryParams
	Headers     InvoiceItemsAllHeaders
	Security    InvoiceItemsAllSecurity
}

type InvoiceItemsAllResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetInvoiceItemsResponse *shared.GetInvoiceItemsResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
