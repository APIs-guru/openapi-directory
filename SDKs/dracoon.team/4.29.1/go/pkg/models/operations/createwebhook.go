package operations

import (
	"openapi/pkg/models/shared"
)

type CreateWebhookHeaders struct {
	XSdsAuthToken  *string      `header:"name=X-Sds-Auth-Token"`
	XSdsDateFormat *interface{} `header:"name=X-Sds-Date-Format"`
}

type CreateWebhookRequest struct {
	Headers CreateWebhookHeaders
	Request shared.CreateWebhookRequest `request:"mediaType=application/json"`
}

type CreateWebhookResponse struct {
	ContentType   string
	ErrorResponse *shared.ErrorResponse
	StatusCode    int64
	Webhook       *shared.Webhook
}
