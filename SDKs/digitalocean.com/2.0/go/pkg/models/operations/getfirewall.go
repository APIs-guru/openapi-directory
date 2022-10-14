package operations

import (
	"openapi/pkg/models/shared"
)

type GetFirewallPathParams struct {
	FirewallID string `pathParam:"style=simple,explode=false,name=firewall_id"`
}

type GetFirewallRequest struct {
	PathParams GetFirewallPathParams
}

type GetFirewall401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type GetFirewallResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetFirewall200ApplicationJSONAny                          *interface{}
	GetFirewall401ApplicationJSONObject                       *GetFirewall401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
