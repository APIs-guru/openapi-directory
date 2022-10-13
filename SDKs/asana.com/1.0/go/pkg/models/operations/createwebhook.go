package operations

import (
	"openapi/pkg/models/shared"
)

type CreateWebhookQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type CreateWebhookRequestBody struct {
	Data *shared.WebhookRequest `json:"data"`
}

type CreateWebhookRequest struct {
	QueryParams CreateWebhookQueryParams
	Request     CreateWebhookRequestBody `request:"mediaType=application/json"`
}

type CreateWebhook201ApplicationJSON struct {
	Data *shared.WebhookResponse `json:"data"`
}

type CreateWebhookResponse struct {
	ContentType                           string
	ErrorResponse                         *shared.ErrorResponse
	StatusCode                            int64
	CreateWebhook201ApplicationJSONObject *CreateWebhook201ApplicationJSON
}
