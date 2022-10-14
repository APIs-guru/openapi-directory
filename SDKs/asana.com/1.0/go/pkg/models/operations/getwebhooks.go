package operations

import (
	"openapi/pkg/models/shared"
)

type GetWebhooksQueryParams struct {
	Limit     *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset    *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
	Resource  *string  `queryParam:"style=form,explode=true,name=resource"`
	Workspace string   `queryParam:"style=form,explode=true,name=workspace"`
}

type GetWebhooksRequest struct {
	QueryParams GetWebhooksQueryParams
}

type GetWebhooks200ApplicationJSON struct {
	Data []shared.WebhookResponse `json:"data,omitempty"`
}

type GetWebhooksResponse struct {
	ContentType                         string
	ErrorResponse                       *shared.ErrorResponse
	StatusCode                          int64
	GetWebhooks200ApplicationJSONObject *GetWebhooks200ApplicationJSON
}
