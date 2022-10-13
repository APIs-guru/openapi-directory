package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ListDropletFirewallsPathParams struct {
	DropletID int64 `pathParam:"style=simple,explode=false,name=droplet_id"`
}

type ListDropletFirewallsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ListDropletFirewallsRequest struct {
	PathParams  ListDropletFirewallsPathParams
	QueryParams ListDropletFirewallsQueryParams
}

type ListDropletFirewalls200ApplicationJSONFirewallsInboundRulesProtocolEnum string

const (
	ListDropletFirewalls200ApplicationJSONFirewallsInboundRulesProtocolEnumTCP  ListDropletFirewalls200ApplicationJSONFirewallsInboundRulesProtocolEnum = "tcp"
	ListDropletFirewalls200ApplicationJSONFirewallsInboundRulesProtocolEnumUDP  ListDropletFirewalls200ApplicationJSONFirewallsInboundRulesProtocolEnum = "udp"
	ListDropletFirewalls200ApplicationJSONFirewallsInboundRulesProtocolEnumIcmp ListDropletFirewalls200ApplicationJSONFirewallsInboundRulesProtocolEnum = "icmp"
)

type ListDropletFirewalls200ApplicationJSONFirewallsInboundRulesSources struct {
	Addresses        []string `json:"addresses"`
	DropletIds       []int64  `json:"droplet_ids"`
	KubernetesIds    []string `json:"kubernetes_ids"`
	LoadBalancerUids []string `json:"load_balancer_uids"`
	Tags             []string `json:"tags"`
}

type ListDropletFirewalls200ApplicationJSONFirewallsInboundRules struct {
	Ports    string                                                                  `json:"ports"`
	Protocol ListDropletFirewalls200ApplicationJSONFirewallsInboundRulesProtocolEnum `json:"protocol"`
	Sources  ListDropletFirewalls200ApplicationJSONFirewallsInboundRulesSources      `json:"sources"`
}

type ListDropletFirewalls200ApplicationJSONFirewallsOutboundRulesProtocolEnum string

const (
	ListDropletFirewalls200ApplicationJSONFirewallsOutboundRulesProtocolEnumTCP  ListDropletFirewalls200ApplicationJSONFirewallsOutboundRulesProtocolEnum = "tcp"
	ListDropletFirewalls200ApplicationJSONFirewallsOutboundRulesProtocolEnumUDP  ListDropletFirewalls200ApplicationJSONFirewallsOutboundRulesProtocolEnum = "udp"
	ListDropletFirewalls200ApplicationJSONFirewallsOutboundRulesProtocolEnumIcmp ListDropletFirewalls200ApplicationJSONFirewallsOutboundRulesProtocolEnum = "icmp"
)

type ListDropletFirewalls200ApplicationJSONFirewallsOutboundRules struct {
	Destinations shared.Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0 `json:"destinations"`
	Ports        string                                                                                                                                                                                              `json:"ports"`
	Protocol     ListDropletFirewalls200ApplicationJSONFirewallsOutboundRulesProtocolEnum                                                                                                                            `json:"protocol"`
}

type ListDropletFirewalls200ApplicationJSONFirewallsPendingChanges struct {
	DropletID *int64  `json:"droplet_id"`
	Removing  *bool   `json:"removing"`
	Status    *string `json:"status"`
}

type ListDropletFirewalls200ApplicationJSONFirewallsStatusEnum string

const (
	ListDropletFirewalls200ApplicationJSONFirewallsStatusEnumWaiting   ListDropletFirewalls200ApplicationJSONFirewallsStatusEnum = "waiting"
	ListDropletFirewalls200ApplicationJSONFirewallsStatusEnumSucceeded ListDropletFirewalls200ApplicationJSONFirewallsStatusEnum = "succeeded"
	ListDropletFirewalls200ApplicationJSONFirewallsStatusEnumFailed    ListDropletFirewalls200ApplicationJSONFirewallsStatusEnum = "failed"
)

type ListDropletFirewalls200ApplicationJSONFirewalls struct {
	CreatedAt      *time.Time                                                      `json:"created_at"`
	DropletIds     []int64                                                         `json:"droplet_ids"`
	ID             *string                                                         `json:"id"`
	InboundRules   []ListDropletFirewalls200ApplicationJSONFirewallsInboundRules   `json:"inbound_rules"`
	Name           *string                                                         `json:"name"`
	OutboundRules  []ListDropletFirewalls200ApplicationJSONFirewallsOutboundRules  `json:"outbound_rules"`
	PendingChanges []ListDropletFirewalls200ApplicationJSONFirewallsPendingChanges `json:"pending_changes"`
	Status         *ListDropletFirewalls200ApplicationJSONFirewallsStatusEnum      `json:"status"`
	Tags           []string                                                        `json:"tags"`
}

type ListDropletFirewalls200ApplicationJSONLinksPages1 struct {
	Last *string `json:"last"`
	Next *string `json:"next"`
}

type ListDropletFirewalls200ApplicationJSONLinksPages2 struct {
	First *string `json:"first"`
	Prev  *string `json:"prev"`
}

type ListDropletFirewalls200ApplicationJSONLinks struct {
	Pages *interface{} `json:"pages"`
}

type ListDropletFirewalls200ApplicationJSONMeta struct {
	Total int64 `json:"total"`
}

type ListDropletFirewalls200ApplicationJSON struct {
	Firewalls []ListDropletFirewalls200ApplicationJSONFirewalls `json:"firewalls"`
	Links     *ListDropletFirewalls200ApplicationJSONLinks      `json:"links"`
	Meta      ListDropletFirewalls200ApplicationJSONMeta        `json:"meta"`
}

type ListDropletFirewalls401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type ListDropletFirewallsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	ListDropletFirewalls200ApplicationJSONObject              *ListDropletFirewalls200ApplicationJSON
	ListDropletFirewalls401ApplicationJSONObject              *ListDropletFirewalls401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
