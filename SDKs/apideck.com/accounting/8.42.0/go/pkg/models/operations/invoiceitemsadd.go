package operations

import (
	"openapi/pkg/models/shared"
)

type InvoiceItemsAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type InvoiceItemsAddHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type InvoiceItemsAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type InvoiceItemsAddRequest struct {
	QueryParams InvoiceItemsAddQueryParams
	Headers     InvoiceItemsAddHeaders
	Request     shared.InvoiceItem `request:"mediaType=application/json"`
	Security    InvoiceItemsAddSecurity
}

type InvoiceItemsAddResponse struct {
	BadRequestResponse        *interface{}
	ContentType               string
	CreateInvoiceItemResponse *shared.CreateInvoiceItemResponse
	NotFoundResponse          *interface{}
	PaymentRequiredResponse   *interface{}
	StatusCode                int64
	UnauthorizedResponse      *interface{}
	UnexpectedErrorResponse   *interface{}
	UnprocessableResponse     *interface{}
}
