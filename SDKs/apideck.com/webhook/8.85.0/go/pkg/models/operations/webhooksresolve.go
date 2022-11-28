package operations

import (
	"openapi/pkg/models/shared"
)

type WebhooksResolvePathParams struct {
	ID        string `pathParam:"style=simple,explode=false,name=id"`
	ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
}

type WebhooksResolveQueryParams struct {
	E *string `queryParam:"style=form,explode=true,name=e"`
}

type WebhooksResolveSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type WebhooksResolveRequest struct {
	PathParams  WebhooksResolvePathParams
	QueryParams WebhooksResolveQueryParams
	Request     interface{} `request:"mediaType=application/json"`
	Security    WebhooksResolveSecurity
}

type WebhooksResolveResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	ResolveWebhookResponse  *shared.ResolveWebhookResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
