package operations

import (
	"openapi/pkg/models/shared"
)

type WebhooksShortExecutePathParams struct {
	ID        string `pathParam:"style=simple,explode=false,name=id"`
	ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
}

type WebhooksShortExecuteSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type WebhooksShortExecuteRequest struct {
	PathParams WebhooksShortExecutePathParams
	Request    interface{} `request:"mediaType=application/json"`
	Security   WebhooksShortExecuteSecurity
}

type WebhooksShortExecuteResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	ExecuteWebhookResponse  *shared.ExecuteWebhookResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
