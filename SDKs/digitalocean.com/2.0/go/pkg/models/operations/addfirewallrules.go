package operations

import (
	"openapi/pkg/models/shared"
)

type AddFirewallRulesPathParams struct {
	FirewallID string `pathParam:"style=simple,explode=false,name=firewall_id"`
}

type AddFirewallRulesRequestBodyInboundRulesProtocolEnum string

const (
	AddFirewallRulesRequestBodyInboundRulesProtocolEnumTCP  AddFirewallRulesRequestBodyInboundRulesProtocolEnum = "tcp"
	AddFirewallRulesRequestBodyInboundRulesProtocolEnumUDP  AddFirewallRulesRequestBodyInboundRulesProtocolEnum = "udp"
	AddFirewallRulesRequestBodyInboundRulesProtocolEnumIcmp AddFirewallRulesRequestBodyInboundRulesProtocolEnum = "icmp"
)

type AddFirewallRulesRequestBodyInboundRulesSources struct {
	Addresses        []string `json:"addresses,omitempty"`
	DropletIds       []int64  `json:"droplet_ids,omitempty"`
	KubernetesIds    []string `json:"kubernetes_ids,omitempty"`
	LoadBalancerUids []string `json:"load_balancer_uids,omitempty"`
	Tags             []string `json:"tags,omitempty"`
}

type AddFirewallRulesRequestBodyInboundRules struct {
	Ports    string                                              `json:"ports"`
	Protocol AddFirewallRulesRequestBodyInboundRulesProtocolEnum `json:"protocol"`
	Sources  AddFirewallRulesRequestBodyInboundRulesSources      `json:"sources"`
}

type AddFirewallRulesRequestBodyOutboundRulesProtocolEnum string

const (
	AddFirewallRulesRequestBodyOutboundRulesProtocolEnumTCP  AddFirewallRulesRequestBodyOutboundRulesProtocolEnum = "tcp"
	AddFirewallRulesRequestBodyOutboundRulesProtocolEnumUDP  AddFirewallRulesRequestBodyOutboundRulesProtocolEnum = "udp"
	AddFirewallRulesRequestBodyOutboundRulesProtocolEnumIcmp AddFirewallRulesRequestBodyOutboundRulesProtocolEnum = "icmp"
)

type AddFirewallRulesRequestBodyOutboundRules struct {
	Destinations shared.Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0 `json:"destinations"`
	Ports        string                                                                                                                                                                                              `json:"ports"`
	Protocol     AddFirewallRulesRequestBodyOutboundRulesProtocolEnum                                                                                                                                                `json:"protocol"`
}

type AddFirewallRulesRequestBody struct {
	InboundRules  []AddFirewallRulesRequestBodyInboundRules  `json:"inbound_rules,omitempty"`
	OutboundRules []AddFirewallRulesRequestBodyOutboundRules `json:"outbound_rules,omitempty"`
}

type AddFirewallRulesRequest struct {
	PathParams AddFirewallRulesPathParams
	Request    *AddFirewallRulesRequestBody `request:"mediaType=application/json"`
}

type AddFirewallRules401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type AddFirewallRulesResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	AddFirewallRules401ApplicationJSONObject                  *AddFirewallRules401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
