package operations

import (
	"openapi/pkg/models/shared"
)

type InvoiceItemsDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type InvoiceItemsDeleteQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type InvoiceItemsDeleteHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type InvoiceItemsDeleteSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type InvoiceItemsDeleteRequest struct {
	PathParams  InvoiceItemsDeletePathParams
	QueryParams InvoiceItemsDeleteQueryParams
	Headers     InvoiceItemsDeleteHeaders
	Security    InvoiceItemsDeleteSecurity
}

type InvoiceItemsDeleteResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	DeleteTaxRateResponse   *shared.DeleteTaxRateResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
