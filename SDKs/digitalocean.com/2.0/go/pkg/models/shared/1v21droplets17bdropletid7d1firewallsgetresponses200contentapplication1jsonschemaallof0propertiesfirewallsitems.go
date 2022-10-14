package shared

import (
	"time"
)

type Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsInboundRulesProtocolEnum string

const (
	Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsInboundRulesProtocolEnumTCP  Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsInboundRulesProtocolEnum = "tcp"
	Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsInboundRulesProtocolEnumUDP  Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsInboundRulesProtocolEnum = "udp"
	Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsInboundRulesProtocolEnumIcmp Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsInboundRulesProtocolEnum = "icmp"
)

type Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsInboundRulesSources struct {
	Addresses        []string `json:"addresses,omitempty"`
	DropletIds       []int64  `json:"droplet_ids,omitempty"`
	KubernetesIds    []string `json:"kubernetes_ids,omitempty"`
	LoadBalancerUids []string `json:"load_balancer_uids,omitempty"`
	Tags             []string `json:"tags,omitempty"`
}

type Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsInboundRules struct {
	Ports    string                                                                                                                                                 `json:"ports"`
	Protocol Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsInboundRulesProtocolEnum `json:"protocol"`
	Sources  Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsInboundRulesSources      `json:"sources"`
}

type Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsOutboundRulesProtocolEnum string

const (
	Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsOutboundRulesProtocolEnumTCP  Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsOutboundRulesProtocolEnum = "tcp"
	Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsOutboundRulesProtocolEnumUDP  Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsOutboundRulesProtocolEnum = "udp"
	Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsOutboundRulesProtocolEnumIcmp Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsOutboundRulesProtocolEnum = "icmp"
)

type Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsOutboundRules struct {
	Destinations Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0 `json:"destinations"`
	Ports        string                                                                                                                                                                                       `json:"ports"`
	Protocol     Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsOutboundRulesProtocolEnum                                      `json:"protocol"`
}

type Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsPendingChanges struct {
	DropletID *int64  `json:"droplet_id,omitempty"`
	Removing  *bool   `json:"removing,omitempty"`
	Status    *string `json:"status,omitempty"`
}

type Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsStatusEnum string

const (
	Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsStatusEnumWaiting   Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsStatusEnum = "waiting"
	Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsStatusEnumSucceeded Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsStatusEnum = "succeeded"
	Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsStatusEnumFailed    Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsStatusEnum = "failed"
)

type Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItems struct {
	CreatedAt      *time.Time                                                                                                                                     `json:"created_at,omitempty"`
	DropletIds     []int64                                                                                                                                        `json:"droplet_ids,omitempty"`
	ID             *string                                                                                                                                        `json:"id,omitempty"`
	InboundRules   []Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsInboundRules   `json:"inbound_rules,omitempty"`
	Name           *string                                                                                                                                        `json:"name,omitempty"`
	OutboundRules  []Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsOutboundRules  `json:"outbound_rules,omitempty"`
	PendingChanges []Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsPendingChanges `json:"pending_changes,omitempty"`
	Status         *Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsStatusEnum      `json:"status,omitempty"`
	Tags           []string                                                                                                                                       `json:"tags,omitempty"`
}
