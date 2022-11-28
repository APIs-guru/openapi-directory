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
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type InvoiceItemsUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type InvoiceItemsUpdateRequest struct {
	PathParams  InvoiceItemsUpdatePathParams
	QueryParams InvoiceItemsUpdateQueryParams
	Headers     InvoiceItemsUpdateHeaders
	Request     shared.InvoiceItemInput `request:"mediaType=application/json"`
	Security    InvoiceItemsUpdateSecurity
}

type InvoiceItemsUpdateResponse struct {
	BadRequestResponse         *shared.BadRequestResponse
	ContentType                string
	NotFoundResponse           *shared.NotFoundResponse
	PaymentRequiredResponse    *shared.PaymentRequiredResponse
	StatusCode                 int64
	UnauthorizedResponse       *shared.UnauthorizedResponse
	UnexpectedErrorResponse    *shared.UnexpectedErrorResponse
	UnprocessableResponse      *shared.UnprocessableResponse
	UpdateInvoiceItemsResponse *shared.UpdateInvoiceItemsResponse
}
