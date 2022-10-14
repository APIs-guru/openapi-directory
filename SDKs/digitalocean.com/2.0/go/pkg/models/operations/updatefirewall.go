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
	Addresses        []string `json:"addresses,omitempty"`
	DropletIds       []int64  `json:"droplet_ids,omitempty"`
	KubernetesIds    []string `json:"kubernetes_ids,omitempty"`
	LoadBalancerUids []string `json:"load_balancer_uids,omitempty"`
	Tags             []string `json:"tags,omitempty"`
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
	DropletID *int64  `json:"droplet_id,omitempty"`
	Removing  *bool   `json:"removing,omitempty"`
	Status    *string `json:"status,omitempty"`
}

type UpdateFirewallRequestBodyStatusEnum string

const (
	UpdateFirewallRequestBodyStatusEnumWaiting   UpdateFirewallRequestBodyStatusEnum = "waiting"
	UpdateFirewallRequestBodyStatusEnumSucceeded UpdateFirewallRequestBodyStatusEnum = "succeeded"
	UpdateFirewallRequestBodyStatusEnumFailed    UpdateFirewallRequestBodyStatusEnum = "failed"
)

type UpdateFirewallRequestBody struct {
	CreatedAt      *time.Time                                `json:"created_at,omitempty"`
	DropletIds     []int64                                   `json:"droplet_ids,omitempty"`
	ID             *string                                   `json:"id,omitempty"`
	InboundRules   []UpdateFirewallRequestBodyInboundRules   `json:"inbound_rules,omitempty"`
	Name           *string                                   `json:"name,omitempty"`
	OutboundRules  []UpdateFirewallRequestBodyOutboundRules  `json:"outbound_rules,omitempty"`
	PendingChanges []UpdateFirewallRequestBodyPendingChanges `json:"pending_changes,omitempty"`
	Status         *UpdateFirewallRequestBodyStatusEnum      `json:"status,omitempty"`
	Tags           []string                                  `json:"tags,omitempty"`
}

type UpdateFirewallRequest struct {
	PathParams UpdateFirewallPathParams
	Request    *UpdateFirewallRequestBody `request:"mediaType=application/json"`
}

type UpdateFirewall401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type UpdateFirewallResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	UpdateFirewall200ApplicationJSONAny                       *interface{}
	UpdateFirewall401ApplicationJSONObject                    *UpdateFirewall401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
