package operations

import (
	"openapi/pkg/models/shared"
)

type InvoicesAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type InvoicesAddHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type InvoicesAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type InvoicesAddRequest struct {
	QueryParams InvoicesAddQueryParams
	Headers     InvoicesAddHeaders
	Request     shared.Invoice `request:"mediaType=application/json"`
	Security    InvoicesAddSecurity
}

type InvoicesAddResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	CreateInvoiceResponse   *shared.CreateInvoiceResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
