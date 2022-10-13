package operations

import (
	"openapi/pkg/models/shared"
)

type InvoiceItemsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type InvoiceItemsUpdateQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type InvoiceItemsUpdateHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type InvoiceItemsUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type InvoiceItemsUpdateRequest struct {
	PathParams  InvoiceItemsUpdatePathParams
	QueryParams InvoiceItemsUpdateQueryParams
	Headers     InvoiceItemsUpdateHeaders
	Request     shared.InvoiceItem `request:"mediaType=application/json"`
	Security    InvoiceItemsUpdateSecurity
}

type InvoiceItemsUpdateResponse struct {
	BadRequestResponse         *interface{}
	ContentType                string
	NotFoundResponse           *interface{}
	PaymentRequiredResponse    *interface{}
	StatusCode                 int64
	UnauthorizedResponse       *interface{}
	UnexpectedErrorResponse    *interface{}
	UnprocessableResponse      *interface{}
	UpdateInvoiceItemsResponse *shared.UpdateInvoiceItemsResponse
}
