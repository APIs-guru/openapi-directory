package operations

import (
	"openapi/pkg/models/shared"
)

type InvoicesUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type InvoicesUpdateQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type InvoicesUpdateHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type InvoicesUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type InvoicesUpdateRequest struct {
	PathParams  InvoicesUpdatePathParams
	QueryParams InvoicesUpdateQueryParams
	Headers     InvoicesUpdateHeaders
	Request     shared.Invoice `request:"mediaType=application/json"`
	Security    InvoicesUpdateSecurity
}

type InvoicesUpdateResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
	UpdateInvoiceResponse   *shared.UpdateInvoiceResponse
}
