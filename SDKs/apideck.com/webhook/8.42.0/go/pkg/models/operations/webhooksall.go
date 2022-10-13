package operations

import (
	"openapi/pkg/models/shared"
)

type WebhooksAllQueryParams struct {
	Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
	Limit  *int64  `queryParam:"style=form,explode=true,name=limit"`
}

type WebhooksAllHeaders struct {
	XApideckAppID string `header:"name=x-apideck-app-id"`
}

type WebhooksAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type WebhooksAllRequest struct {
	QueryParams WebhooksAllQueryParams
	Headers     WebhooksAllHeaders
	Security    WebhooksAllSecurity
}

type WebhooksAllResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetWebhooksResponse     *shared.GetWebhooksResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
