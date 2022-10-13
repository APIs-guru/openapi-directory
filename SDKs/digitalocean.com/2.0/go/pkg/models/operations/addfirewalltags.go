package operations

import (
	"openapi/pkg/models/shared"
)

type AddFirewallTagsPathParams struct {
	FirewallID string `pathParam:"style=simple,explode=false,name=firewall_id"`
}

type AddFirewallTagsRequest struct {
	PathParams AddFirewallTagsPathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type AddFirewallTags401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type AddFirewallTagsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	AddFirewallTags401ApplicationJSONObject                   *AddFirewallTags401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
