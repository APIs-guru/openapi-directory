package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type CreateFirewallRequestBodyInboundRulesProtocolEnum string

const (
	CreateFirewallRequestBodyInboundRulesProtocolEnumTCP  CreateFirewallRequestBodyInboundRulesProtocolEnum = "tcp"
	CreateFirewallRequestBodyInboundRulesProtocolEnumUDP  CreateFirewallRequestBodyInboundRulesProtocolEnum = "udp"
	CreateFirewallRequestBodyInboundRulesProtocolEnumIcmp CreateFirewallRequestBodyInboundRulesProtocolEnum = "icmp"
)

type CreateFirewallRequestBodyInboundRulesSources struct {
	Addresses        []string `json:"addresses"`
	DropletIds       []int64  `json:"droplet_ids"`
	KubernetesIds    []string `json:"kubernetes_ids"`
	LoadBalancerUids []string `json:"load_balancer_uids"`
	Tags             []string `json:"tags"`
}

type CreateFirewallRequestBodyInboundRules struct {
	Ports    string                                            `json:"ports"`
	Protocol CreateFirewallRequestBodyInboundRulesProtocolEnum `json:"protocol"`
	Sources  CreateFirewallRequestBodyInboundRulesSources      `json:"sources"`
}

type CreateFirewallRequestBodyOutboundRulesProtocolEnum string

const (
	CreateFirewallRequestBodyOutboundRulesProtocolEnumTCP  CreateFirewallRequestBodyOutboundRulesProtocolEnum = "tcp"
	CreateFirewallRequestBodyOutboundRulesProtocolEnumUDP  CreateFirewallRequestBodyOutboundRulesProtocolEnum = "udp"
	CreateFirewallRequestBodyOutboundRulesProtocolEnumIcmp CreateFirewallRequestBodyOutboundRulesProtocolEnum = "icmp"
)

type CreateFirewallRequestBodyOutboundRules struct {
	Destinations shared.Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0 `json:"destinations"`
	Ports        string                                                                                                                                                                                              `json:"ports"`
	Protocol     CreateFirewallRequestBodyOutboundRulesProtocolEnum                                                                                                                                                  `json:"protocol"`
}

type CreateFirewallRequestBodyPendingChanges struct {
	DropletID *int64  `json:"droplet_id"`
	Removing  *bool   `json:"removing"`
	Status    *string `json:"status"`
}

type CreateFirewallRequestBodyStatusEnum string

const (
	CreateFirewallRequestBodyStatusEnumWaiting   CreateFirewallRequestBodyStatusEnum = "waiting"
	CreateFirewallRequestBodyStatusEnumSucceeded CreateFirewallRequestBodyStatusEnum = "succeeded"
	CreateFirewallRequestBodyStatusEnumFailed    CreateFirewallRequestBodyStatusEnum = "failed"
)

type CreateFirewallRequestBody struct {
	CreatedAt      *time.Time                                `json:"created_at"`
	DropletIds     []int64                                   `json:"droplet_ids"`
	ID             *string                                   `json:"id"`
	InboundRules   []CreateFirewallRequestBodyInboundRules   `json:"inbound_rules"`
	Name           string                                    `json:"name"`
	OutboundRules  []CreateFirewallRequestBodyOutboundRules  `json:"outbound_rules"`
	PendingChanges []CreateFirewallRequestBodyPendingChanges `json:"pending_changes"`
	Status         *CreateFirewallRequestBodyStatusEnum      `json:"status"`
	Tags           []string                                  `json:"tags"`
}

type CreateFirewallRequest struct {
	Request *CreateFirewallRequestBody `request:"mediaType=application/json"`
}

type CreateFirewall401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type CreateFirewallResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	CreateFirewall202ApplicationJSONAny                       *interface{}
	CreateFirewall401ApplicationJSONObject                    *CreateFirewall401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
