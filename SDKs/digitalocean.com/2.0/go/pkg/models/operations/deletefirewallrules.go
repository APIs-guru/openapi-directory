package operations

import (
"openapi/pkg/models/shared")

type DeleteFirewallRulesPathParams struct {
    FirewallID string `pathParam:"style=simple,explode=false,name=firewall_id"`
    
}


type DeleteFirewallRulesRequestBodyInboundRulesProtocolEnum string

const (
    DeleteFirewallRulesRequestBodyInboundRulesProtocolEnumTCP DeleteFirewallRulesRequestBodyInboundRulesProtocolEnum = "tcp"
DeleteFirewallRulesRequestBodyInboundRulesProtocolEnumUDP DeleteFirewallRulesRequestBodyInboundRulesProtocolEnum = "udp"
DeleteFirewallRulesRequestBodyInboundRulesProtocolEnumIcmp DeleteFirewallRulesRequestBodyInboundRulesProtocolEnum = "icmp"
)


type DeleteFirewallRulesRequestBodyInboundRulesSources struct {
    Addresses []string `json:"addresses,omitempty"`
    DropletIds []int64 `json:"droplet_ids,omitempty"`
    KubernetesIds []string `json:"kubernetes_ids,omitempty"`
    LoadBalancerUids []string `json:"load_balancer_uids,omitempty"`
    Tags []string `json:"tags,omitempty"`
    
}

type DeleteFirewallRulesRequestBodyInboundRules struct {
    Ports string `json:"ports"`
    Protocol DeleteFirewallRulesRequestBodyInboundRulesProtocolEnum `json:"protocol"`
    Sources DeleteFirewallRulesRequestBodyInboundRulesSources `json:"sources"`
    
}


type DeleteFirewallRulesRequestBodyOutboundRulesProtocolEnum string

const (
    DeleteFirewallRulesRequestBodyOutboundRulesProtocolEnumTCP DeleteFirewallRulesRequestBodyOutboundRulesProtocolEnum = "tcp"
DeleteFirewallRulesRequestBodyOutboundRulesProtocolEnumUDP DeleteFirewallRulesRequestBodyOutboundRulesProtocolEnum = "udp"
DeleteFirewallRulesRequestBodyOutboundRulesProtocolEnumIcmp DeleteFirewallRulesRequestBodyOutboundRulesProtocolEnum = "icmp"
)


type DeleteFirewallRulesRequestBodyOutboundRules struct {
    Destinations shared.Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0 `json:"destinations"`
    Ports string `json:"ports"`
    Protocol DeleteFirewallRulesRequestBodyOutboundRulesProtocolEnum `json:"protocol"`
    
}

type DeleteFirewallRulesRequestBody struct {
    InboundRules []DeleteFirewallRulesRequestBodyInboundRules `json:"inbound_rules,omitempty"`
    OutboundRules []DeleteFirewallRulesRequestBodyOutboundRules `json:"outbound_rules,omitempty"`
    
}

type DeleteFirewallRulesRequest struct {
    PathParams DeleteFirewallRulesPathParams 
    Request *DeleteFirewallRulesRequestBody `request:"mediaType=application/json"`
    
}

type DeleteFirewallRules401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type DeleteFirewallRulesResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    DeleteFirewallRules401ApplicationJSONObject *DeleteFirewallRules401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

