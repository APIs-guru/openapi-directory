package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteFirewallDropletsPathParams struct {
	FirewallID string `pathParam:"style=simple,explode=false,name=firewall_id"`
}

type DeleteFirewallDropletsRequest struct {
	PathParams DeleteFirewallDropletsPathParams
	Request    *interface{} `request:"mediaType=application/json"`
}

type DeleteFirewallDroplets401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type DeleteFirewallDropletsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	DeleteFirewallDroplets401ApplicationJSONObject            *DeleteFirewallDroplets401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
