package operations

import (
	"openapi/pkg/models/shared"
)

type WebhooksShortExecutePathParams struct {
	ID        string `pathParam:"style=simple,explode=false,name=id"`
	ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
}

type WebhooksShortExecuteQueryParams struct {
	E   *string `queryParam:"style=form,explode=true,name=e"`
	LID *string `queryParam:"style=form,explode=true,name=l_id"`
}

type WebhooksShortExecuteSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type WebhooksShortExecuteRequest struct {
	PathParams  WebhooksShortExecutePathParams
	QueryParams WebhooksShortExecuteQueryParams
	Request     interface{} `request:"mediaType=application/json"`
	Security    WebhooksShortExecuteSecurity
}

type WebhooksShortExecuteResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	ExecuteWebhookResponse  *shared.ExecuteWebhookResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
