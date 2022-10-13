package shared

import (
	"time"
)

type Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerAlgorithmEnum string

const (
	Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerAlgorithmEnumRoundRobin       Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerAlgorithmEnum = "round_robin"
	Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerAlgorithmEnumLeastConnections Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerAlgorithmEnum = "least_connections"
)

type Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesEntryProtocolEnum string

const (
	Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesEntryProtocolEnumHTTP  Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesEntryProtocolEnum = "http"
	Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesEntryProtocolEnumHTTPS Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesEntryProtocolEnum = "https"
	Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesEntryProtocolEnumHttp2 Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesEntryProtocolEnum = "http2"
	Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesEntryProtocolEnumTCP   Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesEntryProtocolEnum = "tcp"
)

type Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesTargetProtocolEnum string

const (
	Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesTargetProtocolEnumHTTP  Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesTargetProtocolEnum = "http"
	Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesTargetProtocolEnumHTTPS Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesTargetProtocolEnum = "https"
	Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesTargetProtocolEnumHttp2 Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesTargetProtocolEnum = "http2"
	Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesTargetProtocolEnumTCP   Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesTargetProtocolEnum = "tcp"
)

type Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRules struct {
	CertificateID  *string                                                                                                                 `json:"certificate_id"`
	EntryPort      int64                                                                                                                   `json:"entry_port"`
	EntryProtocol  Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesEntryProtocolEnum  `json:"entry_protocol"`
	TargetPort     int64                                                                                                                   `json:"target_port"`
	TargetProtocol Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRulesTargetProtocolEnum `json:"target_protocol"`
	TLSPassthrough *bool                                                                                                                   `json:"tls_passthrough"`
}

type Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheckProtocolEnum string

const (
	Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheckProtocolEnumHTTP  Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheckProtocolEnum = "http"
	Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheckProtocolEnumHTTPS Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheckProtocolEnum = "https"
	Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheckProtocolEnumTCP   Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheckProtocolEnum = "tcp"
)

type Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheck struct {
	CheckIntervalSeconds   *int64                                                                                                         `json:"check_interval_seconds"`
	HealthyThreshold       *int64                                                                                                         `json:"healthy_threshold"`
	Path                   *string                                                                                                        `json:"path"`
	Port                   *int64                                                                                                         `json:"port"`
	Protocol               *Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheckProtocolEnum `json:"protocol"`
	ResponseTimeoutSeconds *int64                                                                                                         `json:"response_timeout_seconds"`
	UnhealthyThreshold     *int64                                                                                                         `json:"unhealthy_threshold"`
}

type Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerRegion struct {
	Available bool        `json:"available"`
	Features  interface{} `json:"features"`
	Name      string      `json:"name"`
	Sizes     interface{} `json:"sizes"`
	Slug      string      `json:"slug"`
}

type Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerSizeEnum string

const (
	Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerSizeEnumLbSmall  Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerSizeEnum = "lb-small"
	Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerSizeEnumLbMedium Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerSizeEnum = "lb-medium"
	Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerSizeEnumLbLarge  Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerSizeEnum = "lb-large"
)

type Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStatusEnum string

const (
	Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStatusEnumNew     Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStatusEnum = "new"
	Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStatusEnumActive  Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStatusEnum = "active"
	Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStatusEnumErrored Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStatusEnum = "errored"
)

type Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessionsTypeEnum string

const (
	Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessionsTypeEnumCookies Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessionsTypeEnum = "cookies"
	Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessionsTypeEnumNone    Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessionsTypeEnum = "none"
)

type Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessions struct {
	CookieName       *string                                                                                                       `json:"cookie_name"`
	CookieTTLSeconds *int64                                                                                                        `json:"cookie_ttl_seconds"`
	Type             *Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessionsTypeEnum `json:"type"`
}

type Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancer struct {
	Algorithm              *Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerAlgorithmEnum    `json:"algorithm"`
	CreatedAt              *time.Time                                                                                              `json:"created_at"`
	DropletIds             []int64                                                                                                 `json:"droplet_ids"`
	EnableBackendKeepalive *bool                                                                                                   `json:"enable_backend_keepalive"`
	EnableProxyProtocol    *bool                                                                                                   `json:"enable_proxy_protocol"`
	ForwardingRules        []Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerForwardingRules `json:"forwarding_rules"`
	HealthCheck            *Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerHealthCheck      `json:"health_check"`
	ID                     *string                                                                                                 `json:"id"`
	IP                     *string                                                                                                 `json:"ip"`
	Name                   *string                                                                                                 `json:"name"`
	RedirectHTTPToHTTPS    *bool                                                                                                   `json:"redirect_http_to_https"`
	Region                 *Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerRegion           `json:"region"`
	Size                   *Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerSizeEnum         `json:"size"`
	Status                 *Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStatusEnum       `json:"status"`
	StickySessions         *Onev21loadBalancersPostResponses202ContentApplication1jsonSchemaPropertiesLoadBalancerStickySessions   `json:"sticky_sessions"`
	Tag                    *string                                                                                                 `json:"tag"`
	VpcUUID                *string                                                                                                 `json:"vpc_uuid"`
}
