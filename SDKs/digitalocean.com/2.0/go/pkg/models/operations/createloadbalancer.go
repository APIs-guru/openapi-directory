package operations

import (
"time"
"openapi/pkg/models/shared")


type CreateLoadBalancerRequestBodyAssignDropletsByIDAlgorithmEnum string

const (
    CreateLoadBalancerRequestBodyAssignDropletsByIDAlgorithmEnumRoundRobin CreateLoadBalancerRequestBodyAssignDropletsByIDAlgorithmEnum = "round_robin"
CreateLoadBalancerRequestBodyAssignDropletsByIDAlgorithmEnumLeastConnections CreateLoadBalancerRequestBodyAssignDropletsByIDAlgorithmEnum = "least_connections"
)



type CreateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesEntryProtocolEnum string

const (
    CreateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesEntryProtocolEnumHTTP CreateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesEntryProtocolEnum = "http"
CreateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesEntryProtocolEnumHTTPS CreateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesEntryProtocolEnum = "https"
CreateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesEntryProtocolEnumHttp2 CreateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesEntryProtocolEnum = "http2"
CreateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesEntryProtocolEnumTCP CreateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesEntryProtocolEnum = "tcp"
)



type CreateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesTargetProtocolEnum string

const (
    CreateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesTargetProtocolEnumHTTP CreateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesTargetProtocolEnum = "http"
CreateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesTargetProtocolEnumHTTPS CreateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesTargetProtocolEnum = "https"
CreateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesTargetProtocolEnumHttp2 CreateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesTargetProtocolEnum = "http2"
CreateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesTargetProtocolEnumTCP CreateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesTargetProtocolEnum = "tcp"
)


type CreateLoadBalancerRequestBodyAssignDropletsByIDForwardingRules struct {
    CertificateID *string `json:"certificate_id,omitempty"`
    EntryPort int64 `json:"entry_port"`
    EntryProtocol CreateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesEntryProtocolEnum `json:"entry_protocol"`
    TargetPort int64 `json:"target_port"`
    TargetProtocol CreateLoadBalancerRequestBodyAssignDropletsByIDForwardingRulesTargetProtocolEnum `json:"target_protocol"`
    TLSPassthrough *bool `json:"tls_passthrough,omitempty"`
    
}


type CreateLoadBalancerRequestBodyAssignDropletsByIDHealthCheckProtocolEnum string

const (
    CreateLoadBalancerRequestBodyAssignDropletsByIDHealthCheckProtocolEnumHTTP CreateLoadBalancerRequestBodyAssignDropletsByIDHealthCheckProtocolEnum = "http"
CreateLoadBalancerRequestBodyAssignDropletsByIDHealthCheckProtocolEnumHTTPS CreateLoadBalancerRequestBodyAssignDropletsByIDHealthCheckProtocolEnum = "https"
CreateLoadBalancerRequestBodyAssignDropletsByIDHealthCheckProtocolEnumTCP CreateLoadBalancerRequestBodyAssignDropletsByIDHealthCheckProtocolEnum = "tcp"
)


type CreateLoadBalancerRequestBodyAssignDropletsByIDHealthCheck struct {
    CheckIntervalSeconds *int64 `json:"check_interval_seconds,omitempty"`
    HealthyThreshold *int64 `json:"healthy_threshold,omitempty"`
    Path *string `json:"path,omitempty"`
    Port *int64 `json:"port,omitempty"`
    Protocol *CreateLoadBalancerRequestBodyAssignDropletsByIDHealthCheckProtocolEnum `json:"protocol,omitempty"`
    ResponseTimeoutSeconds *int64 `json:"response_timeout_seconds,omitempty"`
    UnhealthyThreshold *int64 `json:"unhealthy_threshold,omitempty"`
    
}


type CreateLoadBalancerRequestBodyAssignDropletsByIDSizeEnum string

const (
    CreateLoadBalancerRequestBodyAssignDropletsByIDSizeEnumLbSmall CreateLoadBalancerRequestBodyAssignDropletsByIDSizeEnum = "lb-small"
CreateLoadBalancerRequestBodyAssignDropletsByIDSizeEnumLbMedium CreateLoadBalancerRequestBodyAssignDropletsByIDSizeEnum = "lb-medium"
CreateLoadBalancerRequestBodyAssignDropletsByIDSizeEnumLbLarge CreateLoadBalancerRequestBodyAssignDropletsByIDSizeEnum = "lb-large"
)



type CreateLoadBalancerRequestBodyAssignDropletsByIDStatusEnum string

const (
    CreateLoadBalancerRequestBodyAssignDropletsByIDStatusEnumNew CreateLoadBalancerRequestBodyAssignDropletsByIDStatusEnum = "new"
CreateLoadBalancerRequestBodyAssignDropletsByIDStatusEnumActive CreateLoadBalancerRequestBodyAssignDropletsByIDStatusEnum = "active"
CreateLoadBalancerRequestBodyAssignDropletsByIDStatusEnumErrored CreateLoadBalancerRequestBodyAssignDropletsByIDStatusEnum = "errored"
)



type CreateLoadBalancerRequestBodyAssignDropletsByIDStickySessionsTypeEnum string

const (
    CreateLoadBalancerRequestBodyAssignDropletsByIDStickySessionsTypeEnumCookies CreateLoadBalancerRequestBodyAssignDropletsByIDStickySessionsTypeEnum = "cookies"
CreateLoadBalancerRequestBodyAssignDropletsByIDStickySessionsTypeEnumNone CreateLoadBalancerRequestBodyAssignDropletsByIDStickySessionsTypeEnum = "none"
)


type CreateLoadBalancerRequestBodyAssignDropletsByIDStickySessions struct {
    CookieName *string `json:"cookie_name,omitempty"`
    CookieTTLSeconds *int64 `json:"cookie_ttl_seconds,omitempty"`
    Type *CreateLoadBalancerRequestBodyAssignDropletsByIDStickySessionsTypeEnum `json:"type,omitempty"`
    
}

type CreateLoadBalancerRequestBodyAssignDropletsByID struct {
    Algorithm *CreateLoadBalancerRequestBodyAssignDropletsByIDAlgorithmEnum `json:"algorithm,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    DropletIds []int64 `json:"droplet_ids"`
    EnableBackendKeepalive *bool `json:"enable_backend_keepalive,omitempty"`
    EnableProxyProtocol *bool `json:"enable_proxy_protocol,omitempty"`
    ForwardingRules []CreateLoadBalancerRequestBodyAssignDropletsByIDForwardingRules `json:"forwarding_rules"`
    HealthCheck *CreateLoadBalancerRequestBodyAssignDropletsByIDHealthCheck `json:"health_check,omitempty"`
    ID *string `json:"id,omitempty"`
    IP *string `json:"ip,omitempty"`
    Name *string `json:"name,omitempty"`
    RedirectHTTPToHTTPS *bool `json:"redirect_http_to_https,omitempty"`
    Region shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum `json:"region"`
    Size *CreateLoadBalancerRequestBodyAssignDropletsByIDSizeEnum `json:"size,omitempty"`
    Status *CreateLoadBalancerRequestBodyAssignDropletsByIDStatusEnum `json:"status,omitempty"`
    StickySessions *CreateLoadBalancerRequestBodyAssignDropletsByIDStickySessions `json:"sticky_sessions,omitempty"`
    VpcUUID *string `json:"vpc_uuid,omitempty"`
    
}


type CreateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum string

const (
    CreateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnumRoundRobin CreateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum = "round_robin"
CreateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnumLeastConnections CreateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum = "least_connections"
)



type CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum string

const (
    CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnumHTTP CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum = "http"
CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnumHTTPS CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum = "https"
CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnumHttp2 CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum = "http2"
CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnumTCP CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum = "tcp"
)



type CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum string

const (
    CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnumHTTP CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum = "http"
CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnumHTTPS CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum = "https"
CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnumHttp2 CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum = "http2"
CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnumTCP CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum = "tcp"
)


type CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules struct {
    CertificateID *string `json:"certificate_id,omitempty"`
    EntryPort int64 `json:"entry_port"`
    EntryProtocol CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesEntryProtocolEnum `json:"entry_protocol"`
    TargetPort int64 `json:"target_port"`
    TargetProtocol CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRulesTargetProtocolEnum `json:"target_protocol"`
    TLSPassthrough *bool `json:"tls_passthrough,omitempty"`
    
}


type CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum string

const (
    CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnumHTTP CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum = "http"
CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnumHTTPS CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum = "https"
CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnumTCP CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum = "tcp"
)


type CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck struct {
    CheckIntervalSeconds *int64 `json:"check_interval_seconds,omitempty"`
    HealthyThreshold *int64 `json:"healthy_threshold,omitempty"`
    Path *string `json:"path,omitempty"`
    Port *int64 `json:"port,omitempty"`
    Protocol *CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheckProtocolEnum `json:"protocol,omitempty"`
    ResponseTimeoutSeconds *int64 `json:"response_timeout_seconds,omitempty"`
    UnhealthyThreshold *int64 `json:"unhealthy_threshold,omitempty"`
    
}


type CreateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum string

const (
    CreateLoadBalancerRequestBodyAssignDropletsByTagSizeEnumLbSmall CreateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum = "lb-small"
CreateLoadBalancerRequestBodyAssignDropletsByTagSizeEnumLbMedium CreateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum = "lb-medium"
CreateLoadBalancerRequestBodyAssignDropletsByTagSizeEnumLbLarge CreateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum = "lb-large"
)



type CreateLoadBalancerRequestBodyAssignDropletsByTagStatusEnum string

const (
    CreateLoadBalancerRequestBodyAssignDropletsByTagStatusEnumNew CreateLoadBalancerRequestBodyAssignDropletsByTagStatusEnum = "new"
CreateLoadBalancerRequestBodyAssignDropletsByTagStatusEnumActive CreateLoadBalancerRequestBodyAssignDropletsByTagStatusEnum = "active"
CreateLoadBalancerRequestBodyAssignDropletsByTagStatusEnumErrored CreateLoadBalancerRequestBodyAssignDropletsByTagStatusEnum = "errored"
)



type CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum string

const (
    CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnumCookies CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum = "cookies"
CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnumNone CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum = "none"
)


type CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessions struct {
    CookieName *string `json:"cookie_name,omitempty"`
    CookieTTLSeconds *int64 `json:"cookie_ttl_seconds,omitempty"`
    Type *CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessionsTypeEnum `json:"type,omitempty"`
    
}

type CreateLoadBalancerRequestBodyAssignDropletsByTag struct {
    Algorithm *CreateLoadBalancerRequestBodyAssignDropletsByTagAlgorithmEnum `json:"algorithm,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    EnableBackendKeepalive *bool `json:"enable_backend_keepalive,omitempty"`
    EnableProxyProtocol *bool `json:"enable_proxy_protocol,omitempty"`
    ForwardingRules []CreateLoadBalancerRequestBodyAssignDropletsByTagForwardingRules `json:"forwarding_rules"`
    HealthCheck *CreateLoadBalancerRequestBodyAssignDropletsByTagHealthCheck `json:"health_check,omitempty"`
    ID *string `json:"id,omitempty"`
    IP *string `json:"ip,omitempty"`
    Name *string `json:"name,omitempty"`
    RedirectHTTPToHTTPS *bool `json:"redirect_http_to_https,omitempty"`
    Region shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum `json:"region"`
    Size *CreateLoadBalancerRequestBodyAssignDropletsByTagSizeEnum `json:"size,omitempty"`
    Status *CreateLoadBalancerRequestBodyAssignDropletsByTagStatusEnum `json:"status,omitempty"`
    StickySessions *CreateLoadBalancerRequestBodyAssignDropletsByTagStickySessions `json:"sticky_sessions,omitempty"`
    Tag string `json:"tag"`
    VpcUUID *string `json:"vpc_uuid,omitempty"`
    
}

type CreateLoadBalancerRequest struct {
    Request interface{} `request:"mediaType=application/json"`
    
}

type CreateLoadBalancer401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type CreateLoadBalancerResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    CreateLoadBalancer202ApplicationJSONAny *interface{} 
    CreateLoadBalancer401ApplicationJSONObject *CreateLoadBalancer401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}

