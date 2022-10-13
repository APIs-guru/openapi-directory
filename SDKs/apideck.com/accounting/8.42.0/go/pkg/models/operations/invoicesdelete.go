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
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
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
	BadRequestResponse      *interface{}
	ContentType             string
	DeleteInvoiceResponse   *shared.DeleteInvoiceResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
