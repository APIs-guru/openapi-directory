package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type UpdateFirewallPathParams struct {
	FirewallID string `pathParam:"style=simple,explode=false,name=firewall_id"`
}

type UpdateFirewallRequestBodyInboundRulesProtocolEnum string

const (
	UpdateFirewallRequestBodyInboundRulesProtocolEnumTCP  UpdateFirewallRequestBodyInboundRulesProtocolEnum = "tcp"
	UpdateFirewallRequestBodyInboundRulesProtocolEnumUDP  UpdateFirewallRequestBodyInboundRulesProtocolEnum = "udp"
	UpdateFirewallRequestBodyInboundRulesProtocolEnumIcmp UpdateFirewallRequestBodyInboundRulesProtocolEnum = "icmp"
)

type UpdateFirewallRequestBodyInboundRulesSources struct {
	Addresses        []string `json:"addresses"`
	DropletIds       []int64  `json:"droplet_ids"`
	KubernetesIds    []string `json:"kubernetes_ids"`
	LoadBalancerUids []string `json:"load_balancer_uids"`
	Tags             []string `json:"tags"`
}

type UpdateFirewallRequestBodyInboundRules struct {
	Ports    string                                            `json:"ports"`
	Protocol UpdateFirewallRequestBodyInboundRulesProtocolEnum `json:"protocol"`
	Sources  UpdateFirewallRequestBodyInboundRulesSources      `json:"sources"`
}

type UpdateFirewallRequestBodyOutboundRulesProtocolEnum string

const (
	UpdateFirewallRequestBodyOutboundRulesProtocolEnumTCP  UpdateFirewallRequestBodyOutboundRulesProtocolEnum = "tcp"
	UpdateFirewallRequestBodyOutboundRulesProtocolEnumUDP  UpdateFirewallRequestBodyOutboundRulesProtocolEnum = "udp"
	UpdateFirewallRequestBodyOutboundRulesProtocolEnumIcmp UpdateFirewallRequestBodyOutboundRulesProtocolEnum = "icmp"
)

type UpdateFirewallRequestBodyOutboundRules struct {
	Destinations shared.Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0 `json:"destinations"`
	Ports        string                                                                                                                                                                                              `json:"ports"`
	Protocol     UpdateFirewallRequestBodyOutboundRulesProtocolEnum                                                                                                                                                  `json:"protocol"`
}

type UpdateFirewallRequestBodyPendingChanges struct {
	DropletID *int64  `json:"droplet_id"`
	Removing  *bool   `json:"removing"`
	Status    *string `json:"status"`
}

type UpdateFirewallRequestBodyStatusEnum string

const (
	UpdateFirewallRequestBodyStatusEnumWaiting   UpdateFirewallRequestBodyStatusEnum = "waiting"
	UpdateFirewallRequestBodyStatusEnumSucceeded UpdateFirewallRequestBodyStatusEnum = "succeeded"
	UpdateFirewallRequestBodyStatusEnumFailed    UpdateFirewallRequestBodyStatusEnum = "failed"
)

type UpdateFirewallRequestBody struct {
	CreatedAt      *time.Time                                `json:"created_at"`
	DropletIds     []int64                                   `json:"droplet_ids"`
	ID             *string                                   `json:"id"`
	InboundRules   []UpdateFirewallRequestBodyInboundRules   `json:"inbound_rules"`
	Name           *string                                   `json:"name"`
	OutboundRules  []UpdateFirewallRequestBodyOutboundRules  `json:"outbound_rules"`
	PendingChanges []UpdateFirewallRequestBodyPendingChanges `json:"pending_changes"`
	Status         *UpdateFirewallRequestBodyStatusEnum      `json:"status"`
	Tags           []string                                  `json:"tags"`
}

type UpdateFirewallRequest struct {
	PathParams UpdateFirewallPathParams
	Request    *UpdateFirewallRequestBody `request:"mediaType=application/json"`
}

type UpdateFirewall401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type UpdateFirewallResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	UpdateFirewall200ApplicationJSONAny                       *interface{}
	UpdateFirewall401ApplicationJSONObject                    *UpdateFirewall401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
