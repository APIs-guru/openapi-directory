package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteFirewallTagsPathParams struct {
	FirewallID string `pathParam:"style=simple,explode=false,name=firewall_id"`
}

type DeleteFirewallTagsRequest struct {
	PathParams DeleteFirewallTagsPathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type DeleteFirewallTags401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type DeleteFirewallTagsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	DeleteFirewallTags401ApplicationJSONObject                *DeleteFirewallTags401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
