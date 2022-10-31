package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteWebhookPathParams struct {
	WebhookGid string `pathParam:"style=simple,explode=false,name=webhook_gid"`
}

type DeleteWebhookQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type DeleteWebhookRequest struct {
	PathParams  DeleteWebhookPathParams
	QueryParams DeleteWebhookQueryParams
}

type DeleteWebhook200ApplicationJSON struct {
	Data map[string]interface{} `json:"data,omitempty"`
}

type DeleteWebhookResponse struct {
	ContentType                           string
	ErrorResponse                         *shared.ErrorResponse
	StatusCode                            int64
	DeleteWebhook200ApplicationJSONObject *DeleteWebhook200ApplicationJSON
}
