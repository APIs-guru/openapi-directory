package operations

import (
	"openapi/pkg/models/shared"
)

type InvoicesDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type InvoicesDeleteQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type InvoicesDeleteHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type InvoicesDeleteSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type InvoicesDeleteRequest struct {
	PathParams  InvoicesDeletePathParams
	QueryParams InvoicesDeleteQueryParams
	Headers     InvoicesDeleteHeaders
	Security    InvoicesDeleteSecurity
}

type InvoicesDeleteResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	DeleteInvoiceResponse   *shared.DeleteInvoiceResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
