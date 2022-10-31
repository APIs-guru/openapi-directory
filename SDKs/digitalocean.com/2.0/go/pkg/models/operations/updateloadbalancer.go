package operations

import (
"time"
"openapi/pkg/models/shared")

type UpdateLoadBalancerPathParams struct {
    LbID string `pathParam:"style=simple,explode=false,name=lb_id"`
    
}


type UpdateLoadBalancerRequestBodyAssignDropletsByIDAlgorithmEnum string

const (
    UpdateLoadBalancerRequestBodyAssignDropletsByIDAlgorithmEnumRoundRobin UpdateLoadBalancerRequestBodyAssignDropletsByIDAlgorithmEnum = "round_robin"
UpdateLoadBalancerRequestBodyAssignDropletsByIDAlgorithmEnumLeastConnections UpdateLoadBalancerRequestBodyAssignDropletsByIDAlgorithmEnum = "least_connections"
)



type UpdateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesEntryProtocolEnum string

const (
    UpdateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesEntryProtocolEnumHTTP UpdateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesEntryProtocolEnum = "http"
UpdateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesEntryProtocolEnumHTTPS UpdateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesEntryProtocolEnum = "https"
UpdateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesEntryProtocolEnumHttp2 UpdateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesEntryProtocolEnum = "http2"
UpdateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesEntryProtocolEnumTCP UpdateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesEntryProtocolEnum = "tcp"
)



type UpdateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesTargetProtocolEnum string

const (
    UpdateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesTargetProtocolEnumHTTP UpdateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesTargetProtocolEnum = "http"
UpdateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesTargetProtocolEnumHTTPS UpdateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesTargetProtocolEnum = "https"
UpdateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesTargetProtocolEnumHttp2 UpdateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesTargetProtocolEnum = "http2"
UpdateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesTargetProtocolEnumTCP UpdateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesTargetProtocolEnum = "tcp"
)


type UpdateLoadBalancerRequestBodyAssignDropletsByIDForwardingRules struct {
    CertificateID *string `json:"certificate_id,omitempty"`
    EntryPort int64 `json:"entry_port"`
    EntryProtocol UpdateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesEntryProtocolEnum `json:"entry_protocol"`
    TargetPort int64 `json:"target_port"`
    TargetProtocol UpdateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesTargetProtocolEnum `json:"target_protocol"`
    TLSPassthrough *bool `json:"tls_passthrough,omitempty"`
    
}


type UpdateLoadBalancerRequestBodyAssignDropletsByIDHealthCheckProtocolEnum string

const (
    UpdateLoadBalancerRequestBodyAssignDropletsByIDHealthCheckProtocolEnumHTTP UpdateLoadBalancerRequestBodyAssignDropletsByIDHealthCheckProtocolEnum = "http"
UpdateLoadBalancerRequestBodyAssignDropletsByIDHealthCheckProtocolEnumHTTPS UpdateLoadBalancerRequestBodyAssignDropletsByIDHealthCheckProtocolEnum = "https"
UpdateLoadBalancerRequestBodyAssignDropletsByIDHealthCheckProtocolEnumTCP UpdateLoadBalancerRequestBodyAssignDropletsByIDHealthCheckProtocolEnum = "tcp"
)


type UpdateLoadBalancerRequestBodyAssignDropletsByIDHealthCheck struct {
    CheckIntervalSeconds *int64 `json:"check_interval_seconds,omitempty"`
    HealthyThreshold *int64 `json:"healthy_threshold,omitempty"`
    Path *string `json:"path,omitempty"`
    Port *int64 `json:"port,omitempty"`
    Protocol *UpdateLoadBalancerRequestBodyAssignDropletsByIDHealthCheckProtocolEnum `json:"protocol,omitempty"`
    ResponseTimeoutSeconds *int64 `json:"response_timeout_seconds,omitempty"`
    UnhealthyThreshold *int64 `json:"unhealthy_threshold,omitempty"`
    
}


type UpdateLoadBalancerRequestBodyAssignDropletsByIDSizeEnum string

const (
    UpdateLoadBalancerRequestBodyAssignDropletsByIDSizeEnumLbSmall UpdateLoadBalancerRequestBodyAssignDropletsByIDSizeEnum = "lb-small"
UpdateLoadBalancerRequestBodyAssignDropletsByIDSizeEnumLbMedium UpdateLoadBalancerRequestBodyAssignDropletsByIDSizeEnum = "lb-medium"
UpdateLoadBalancerRequestBodyAssignDropletsByIDSizeEnumLbLarge UpdateLoadBalancerRequestBodyAssignDropletsByIDSizeEnum = "lb-large"
)



type UpdateLoadBalancerRequestBodyAssignDropletsByIDStatusEnum string

const (
    UpdateLoadBalancerRequestBodyAssignDropletsByIDStatusEnumNew UpdateLoadBalancerRequestBodyAssignDropletsByIDStatusEnum = "new"
UpdateLoadBalancerRequestBodyAssignDropletsByIDStatusEnumActive UpdateLoadBalancerRequestBodyAssignDropletsByIDStatusEnum = "active"
UpdateLoadBalancerRequestBodyAssignDropletsByIDStatusEnumErrored UpdateLoadBalancerRequestBodyAssignDropletsByIDStatusEnum = "errored"
)



type UpdateLoadBalancerRequestBodyAssignDropletsByIDStickySessionsTypeEnum string

const (
    UpdateLoadBalancerRequestBodyAssignDropletsByIDStickySessionsTypeEnumCookies UpdateLoadBalancerRequestBodyAssignDropletsByIDStickySessionsTypeEnum = "cookies"
UpdateLoadBalancerRequestBodyAssignDropletsByIDStickySessionsTypeEnumNone UpdateLoadBalancerRequestBodyAssignDropletsByIDStickySessionsTypeEnum = "none"
)


type UpdateLoadBalancerRequestBodyAssignDropletsByIDStickySessions struct {
    CookieName *string `json:"cookie_name,omitempty"`
    CookieTTLSeconds *int64 `json:"cookie_ttl_seconds,omitempty"`
    Type *UpdateLoadBalancerRequestBodyAssignDropletsByIDStickySessionsTypeEnum `json:"type,omitempty"`
    
}

type UpdateLoadBalancerRequestBodyAssignDropletsByID struct {
    Algorithm *UpdateLoadBalancerRequestBodyAssignDropletsByIDAlgorithmEnum `json:"algorithm,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    DropletIds []int64 `json:"droplet_ids"`
    EnableBackendKeepalive *bool `json:"enable_backend_keepalive,omitempty"`
    EnableProxyProtocol *bool `json:"enable_proxy_protocol,omitempty"`
    ForwardingRules []UpdateLoadBalancerRequestBodyAssignDropletsByIDForwardingRules `json:"forwarding_rules"`
    HealthCheck *UpdateLoadBalancerRequestBodyAssignDropletsByIDHealthCheck `json:"health_check,omitempty"`
    ID *string `json:"id,omitempty"`
    IP *string `json:"ip,omitempty"`
    Name *string `json:"name,omitempty"`
    RedirectHTTPToHTTPS *bool `json:"redirect_http_to_https,omitempty"`
    Region shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum `json:"region"`
    Size *UpdateLoadBalancerRequestBodyAssignDropletsByIDSizeEnum `json:"size,omitempty"`
    Status *UpdateLoadBalancerRequestBodyAssignDropletsByIDStatusEnum `json:"status,omitempty"`
    StickySessions *UpdateLoadBalancerRequestBodyAssignDropletsByIDStickySessions `json:"sticky_sessions,omitempty"`
    VpcUUID *string `json:"vpc_uuid,omitempty"`
    
}


type UpdateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum string

const (
    UpdateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnumRoundRobin UpdateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum = "round_robin"
UpdateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnumLeastConnections UpdateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum = "least_connections"
)



type UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum string

const (
    UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnumHTTP UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum = "http"
UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnumHTTPS UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum = "https"
UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnumHttp2 UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum = "http2"
UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnumTCP UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum = "tcp"
)



type UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum string

const (
    UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnumHTTP UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum = "http"
UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnumHTTPS UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum = "https"
UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnumHttp2 UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum = "http2"
UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnumTCP UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum = "tcp"
)


type UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules struct {
    CertificateID *string `json:"certificate_id,omitempty"`
    EntryPort int64 `json:"entry_port"`
    EntryProtocol UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum `json:"entry_protocol"`
    TargetPort int64 `json:"target_port"`
    TargetProtocol UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum `json:"target_protocol"`
    TLSPassthrough *bool `json:"tls_passthrough,omitempty"`
    
}


type UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum string

const (
    UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnumHTTP UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum = "http"
UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnumHTTPS UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum = "https"
UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnumTCP UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum = "tcp"
)


type UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck struct {
    CheckIntervalSeconds *int64 `json:"check_interval_seconds,omitempty"`
    HealthyThreshold *int64 `json:"healthy_threshold,omitempty"`
    Path *string `json:"path,omitempty"`
    Port *int64 `json:"port,omitempty"`
    Protocol *UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum `json:"protocol,omitempty"`
    ResponseTimeoutSeconds *int64 `json:"response_timeout_seconds,omitempty"`
    UnhealthyThreshold *int64 `json:"unhealthy_threshold,omitempty"`
    
}


type UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum string

const (
    UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnumLbSmall UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum = "lb-small"
UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnumLbMedium UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum = "lb-medium"
UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnumLbLarge UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum = "lb-large"
)



type UpdateLoadBalancerRequestBodyAssignDropletsByTagStatusEnum string

const (
    UpdateLoadBalancerRequestBodyAssignDropletsByTagStatusEnumNew UpdateLoadBalancerRequestBodyAssignDropletsByTagStatusEnum = "new"
UpdateLoadBalancerRequestBodyAssignDropletsByTagStatusEnumActive UpdateLoadBalancerRequestBodyAssignDropletsByTagStatusEnum = "active"
UpdateLoadBalancerRequestBodyAssignDropletsByTagStatusEnumErrored UpdateLoadBalancerRequestBodyAssignDropletsByTagStatusEnum = "errored"
)



type UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum string

const (
    UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnumCookies UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum = "cookies"
UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnumNone UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum = "none"
)


type UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions struct {
    CookieName *string `json:"cookie_name,omitempty"`
    CookieTTLSeconds *int64 `json:"cookie_ttl_seconds,omitempty"`
    Type *UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum `json:"type,omitempty"`
    
}

type UpdateLoadBalancerRequestBodyAssignDropletsByTag struct {
    Algorithm *UpdateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum `json:"algorithm,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    EnableBackendKeepalive *bool `json:"enable_backend_keepalive,omitempty"`
    EnableProxyProtocol *bool `json:"enable_proxy_protocol,omitempty"`
    ForwardingRules []UpdateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules `json:"forwarding_rules"`
    HealthCheck *UpdateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck `json:"health_check,omitempty"`
    ID *string `json:"id,omitempty"`
    IP *string `json:"ip,omitempty"`
    Name *string `json:"name,omitempty"`
    RedirectHTTPToHTTPS *bool `json:"redirect_http_to_https,omitempty"`
    Region shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum `json:"region"`
    Size *UpdateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum `json:"size,omitempty"`
    Status *UpdateLoadBalancerRequestBodyAssignDropletsByTagStatusEnum `json:"status,omitempty"`
    StickySessions *UpdateLoadBalancerRequestBodyAssignDropletsByTagStickySessions `json:"sticky_sessions,omitempty"`
    Tag string `json:"tag"`
    VpcUUID *string `json:"vpc_uuid,omitempty"`
    
}

type UpdateLoadBalancerRequest struct {
    PathParams UpdateLoadBalancerPathParams 
    Request interface{} `request:"mediaType=application/json"`
    
}

type UpdateLoadBalancer401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type UpdateLoadBalancerResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    UpdateLoadBalancer200ApplicationJSONAny *interface{} 
    UpdateLoadBalancer401ApplicationJSONObject *UpdateLoadBalancer401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

