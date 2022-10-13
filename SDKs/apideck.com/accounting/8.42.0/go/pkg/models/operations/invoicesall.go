package operations

import (
	"openapi/pkg/models/shared"
)

type InvoicesAllQueryParams struct {
	Cursor *string              `queryParam:"style=form,explode=true,name=cursor"`
	Limit  *int64               `queryParam:"style=form,explode=true,name=limit"`
	Raw    *bool                `queryParam:"style=form,explode=true,name=raw"`
	Sort   *shared.InvoicesSort `queryParam:"style=deepObject,explode=true,name=sort"`
}

type InvoicesAllHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type InvoicesAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type InvoicesAllRequest struct {
	QueryParams InvoicesAllQueryParams
	Headers     InvoicesAllHeaders
	Security    InvoicesAllSecurity
}

type InvoicesAllResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetInvoicesResponse     *shared.GetInvoicesResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
