package operations

import (
"time"
"openapi/pkg/models/shared")

type ListDropletFirewallsPathParams struct {
    DropletID int64 `pathParam:"style=simple,explode=false,name=droplet_id"`
    
}

type ListDropletFirewallsQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type ListDropletFirewallsRequest struct {
    PathParams ListDropletFirewallsPathParams 
    QueryParams ListDropletFirewallsQueryParams 
    
}


type ListDropletFirewalls200ApplicationJSONFirewallsInboundRulesProtocolEnum string

const (
    ListDropletFirewalls200ApplicationJSONFirewallsInboundRulesProtocolEnumTCP ListDropletFirewalls200ApplicationJSONFirewallsInboundRulesProtocolEnum = "tcp"
ListDropletFirewalls200ApplicationJSONFirewallsInboundRulesProtocolEnumUDP ListDropletFirewalls200ApplicationJSONFirewallsInboundRulesProtocolEnum = "udp"
ListDropletFirewalls200ApplicationJSONFirewallsInboundRulesProtocolEnumIcmp ListDropletFirewalls200ApplicationJSONFirewallsInboundRulesProtocolEnum = "icmp"
)


type ListDropletFirewalls200ApplicationJSONFirewallsInboundRulesSources struct {
    Addresses []string `json:"addresses,omitempty"`
    DropletIds []int64 `json:"droplet_ids,omitempty"`
    KubernetesIds []string `json:"kubernetes_ids,omitempty"`
    LoadBalancerUids []string `json:"load_balancer_uids,omitempty"`
    Tags []string `json:"tags,omitempty"`
    
}

type ListDropletFirewalls200ApplicationJSONFirewallsInboundRules struct {
    Ports string `json:"ports"`
    Protocol ListDropletFirewalls200ApplicationJSONFirewallsInboundRulesProtocolEnum `json:"protocol"`
    Sources ListDropletFirewalls200ApplicationJSONFirewallsInboundRulesSources `json:"sources"`
    
}


type ListDropletFirewalls200ApplicationJSONFirewallsOutboundRulesProtocolEnum string

const (
    ListDropletFirewalls200ApplicationJSONFirewallsOutboundRulesProtocolEnumTCP ListDropletFirewalls200ApplicationJSONFirewallsOutboundRulesProtocolEnum = "tcp"
ListDropletFirewalls200ApplicationJSONFirewallsOutboundRulesProtocolEnumUDP ListDropletFirewalls200ApplicationJSONFirewallsOutboundRulesProtocolEnum = "udp"
ListDropletFirewalls200ApplicationJSONFirewallsOutboundRulesProtocolEnumIcmp ListDropletFirewalls200ApplicationJSONFirewallsOutboundRulesProtocolEnum = "icmp"
)


type ListDropletFirewalls200ApplicationJSONFirewallsOutboundRules struct {
    Destinations shared.Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0 `json:"destinations"`
    Ports string `json:"ports"`
    Protocol ListDropletFirewalls200ApplicationJSONFirewallsOutboundRulesProtocolEnum `json:"protocol"`
    
}

type ListDropletFirewalls200ApplicationJSONFirewallsPendingChanges struct {
    DropletID *int64 `json:"droplet_id,omitempty"`
    Removing *bool `json:"removing,omitempty"`
    Status *string `json:"status,omitempty"`
    
}


type ListDropletFirewalls200ApplicationJSONFirewallsStatusEnum string

const (
    ListDropletFirewalls200ApplicationJSONFirewallsStatusEnumWaiting ListDropletFirewalls200ApplicationJSONFirewallsStatusEnum = "waiting"
ListDropletFirewalls200ApplicationJSONFirewallsStatusEnumSucceeded ListDropletFirewalls200ApplicationJSONFirewallsStatusEnum = "succeeded"
ListDropletFirewalls200ApplicationJSONFirewallsStatusEnumFailed ListDropletFirewalls200ApplicationJSONFirewallsStatusEnum = "failed"
)


type ListDropletFirewalls200ApplicationJSONFirewalls struct {
    CreatedAt *time.Time `json:"created_at,omitempty"`
    DropletIds []int64 `json:"droplet_ids,omitempty"`
    ID *string `json:"id,omitempty"`
    InboundRules []ListDropletFirewalls200ApplicationJSONFirewallsInboundRules `json:"inbound_rules,omitempty"`
    Name *string `json:"name,omitempty"`
    OutboundRules []ListDropletFirewalls200ApplicationJSONFirewallsOutboundRules `json:"outbound_rules,omitempty"`
    PendingChanges []ListDropletFirewalls200ApplicationJSONFirewallsPendingChanges `json:"pending_changes,omitempty"`
    Status *ListDropletFirewalls200ApplicationJSONFirewallsStatusEnum `json:"status,omitempty"`
    Tags []string `json:"tags,omitempty"`
    
}

type ListDropletFirewalls200ApplicationJSONLinksPages1 struct {
    Last *string `json:"last,omitempty"`
    Next *string `json:"next,omitempty"`
    
}

type ListDropletFirewalls200ApplicationJSONLinksPages2 struct {
    First *string `json:"first,omitempty"`
    Prev *string `json:"prev,omitempty"`
    
}

type ListDropletFirewalls200ApplicationJSONLinks struct {
    Pages *interface{} `json:"pages,omitempty"`
    
}

type ListDropletFirewalls200ApplicationJSONMeta struct {
    Total int64 `json:"total"`
    
}

type ListDropletFirewalls200ApplicationJSON struct {
    Firewalls []ListDropletFirewalls200ApplicationJSONFirewalls `json:"firewalls,omitempty"`
    Links *ListDropletFirewalls200ApplicationJSONLinks `json:"links,omitempty"`
    Meta ListDropletFirewalls200ApplicationJSONMeta `json:"meta"`
    
}

type ListDropletFirewalls401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type ListDropletFirewallsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    ListDropletFirewalls200ApplicationJSONObject *ListDropletFirewalls200ApplicationJSON 
    ListDropletFirewalls401ApplicationJSONObject *ListDropletFirewalls401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

