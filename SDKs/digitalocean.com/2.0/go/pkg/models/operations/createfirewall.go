package operations

import (
"time"
"openapi/pkg/models/shared")


type CreateFirewallRequestBodyInboundRulesProtocolEnum string

const (
    CreateFirewallRequestBodyInboundRulesProtocolEnumTCP CreateFirewallRequestBodyInboundRulesProtocolEnum = "tcp"
CreateFirewallRequestBodyInboundRulesProtocolEnumUDP CreateFirewallRequestBodyInboundRulesProtocolEnum = "udp"
CreateFirewallRequestBodyInboundRulesProtocolEnumIcmp CreateFirewallRequestBodyInboundRulesProtocolEnum = "icmp"
)


type CreateFirewallRequestBodyInboundRulesSources struct {
    Addresses []string `json:"addresses,omitempty"`
    DropletIds []int64 `json:"droplet_ids,omitempty"`
    KubernetesIds []string `json:"kubernetes_ids,omitempty"`
    LoadBalancerUids []string `json:"load_balancer_uids,omitempty"`
    Tags []string `json:"tags,omitempty"`
    
}

type CreateFirewallRequestBodyInboundRules struct {
    Ports string `json:"ports"`
    Protocol CreateFirewallRequestBodyInboundRulesProtocolEnum `json:"protocol"`
    Sources CreateFirewallRequestBodyInboundRulesSources `json:"sources"`
    
}


type CreateFirewallRequestBodyOutboundRulesProtocolEnum string

const (
    CreateFirewallRequestBodyOutboundRulesProtocolEnumTCP CreateFirewallRequestBodyOutboundRulesProtocolEnum = "tcp"
CreateFirewallRequestBodyOutboundRulesProtocolEnumUDP CreateFirewallRequestBodyOutboundRulesProtocolEnum = "udp"
CreateFirewallRequestBodyOutboundRulesProtocolEnumIcmp CreateFirewallRequestBodyOutboundRulesProtocolEnum = "icmp"
)


type CreateFirewallRequestBodyOutboundRules struct {
    Destinations shared.Onev21droplets1Percent7BdropletIDPercent7D1firewallsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesFirewallsItemsAllOf1PropertiesInboundRulesItemsAllOf1PropertiesSourcesAllOf0 `json:"destinations"`
    Ports string `json:"ports"`
    Protocol CreateFirewallRequestBodyOutboundRulesProtocolEnum `json:"protocol"`
    
}

type CreateFirewallRequestBodyPendingChanges struct {
    DropletID *int64 `json:"droplet_id,omitempty"`
    Removing *bool `json:"removing,omitempty"`
    Status *string `json:"status,omitempty"`
    
}


type CreateFirewallRequestBodyStatusEnum string

const (
    CreateFirewallRequestBodyStatusEnumWaiting CreateFirewallRequestBodyStatusEnum = "waiting"
CreateFirewallRequestBodyStatusEnumSucceeded CreateFirewallRequestBodyStatusEnum = "succeeded"
CreateFirewallRequestBodyStatusEnumFailed CreateFirewallRequestBodyStatusEnum = "failed"
)


type CreateFirewallRequestBody struct {
    CreatedAt *time.Time `json:"created_at,omitempty"`
    DropletIds []int64 `json:"droplet_ids,omitempty"`
    ID *string `json:"id,omitempty"`
    InboundRules []CreateFirewallRequestBodyInboundRules `json:"inbound_rules,omitempty"`
    Name string `json:"name"`
    OutboundRules []CreateFirewallRequestBodyOutboundRules `json:"outbound_rules,omitempty"`
    PendingChanges []CreateFirewallRequestBodyPendingChanges `json:"pending_changes,omitempty"`
    Status *CreateFirewallRequestBodyStatusEnum `json:"status,omitempty"`
    Tags []string `json:"tags,omitempty"`
    
}

type CreateFirewallRequest struct {
    Request *CreateFirewallRequestBody `request:"mediaType=application/json"`
    
}

type CreateFirewall401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type CreateFirewallResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    CreateFirewall202ApplicationJSONAny *interface{} 
    CreateFirewall401ApplicationJSONObject *CreateFirewall401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

