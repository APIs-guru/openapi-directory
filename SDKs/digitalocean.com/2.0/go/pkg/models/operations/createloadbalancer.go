package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type CreateLoadBalancerRequestBody1AlgorithmEnum string

const (
	CreateLoadBalancerRequestBody1AlgorithmEnumRoundRobin       CreateLoadBalancerRequestBody1AlgorithmEnum = "round_robin"
	CreateLoadBalancerRequestBody1AlgorithmEnumLeastConnections CreateLoadBalancerRequestBody1AlgorithmEnum = "least_connections"
)

type CreateLoadBalancerRequestBody1ForwardingRulesEntryProtocolEnum string

const (
	CreateLoadBalancerRequestBody1ForwardingRulesEntryProtocolEnumHTTP  CreateLoadBalancerRequestBody1ForwardingRulesEntryProtocolEnum = "http"
	CreateLoadBalancerRequestBody1ForwardingRulesEntryProtocolEnumHTTPS CreateLoadBalancerRequestBody1ForwardingRulesEntryProtocolEnum = "https"
	CreateLoadBalancerRequestBody1ForwardingRulesEntryProtocolEnumHttp2 CreateLoadBalancerRequestBody1ForwardingRulesEntryProtocolEnum = "http2"
	CreateLoadBalancerRequestBody1ForwardingRulesEntryProtocolEnumTCP   CreateLoadBalancerRequestBody1ForwardingRulesEntryProtocolEnum = "tcp"
)

type CreateLoadBalancerRequestBody1ForwardingRulesTargetProtocolEnum string

const (
	CreateLoadBalancerRequestBody1ForwardingRulesTargetProtocolEnumHTTP  CreateLoadBalancerRequestBody1ForwardingRulesTargetProtocolEnum = "http"
	CreateLoadBalancerRequestBody1ForwardingRulesTargetProtocolEnumHTTPS CreateLoadBalancerRequestBody1ForwardingRulesTargetProtocolEnum = "https"
	CreateLoadBalancerRequestBody1ForwardingRulesTargetProtocolEnumHttp2 CreateLoadBalancerRequestBody1ForwardingRulesTargetProtocolEnum = "http2"
	CreateLoadBalancerRequestBody1ForwardingRulesTargetProtocolEnumTCP   CreateLoadBalancerRequestBody1ForwardingRulesTargetProtocolEnum = "tcp"
)

type CreateLoadBalancerRequestBody1ForwardingRules struct {
	CertificateID  *string                                                         `json:"certificate_id,omitempty"`
	EntryPort      int64                                                           `json:"entry_port"`
	EntryProtocol  CreateLoadBalancerRequestBody1ForwardingRulesEntryProtocolEnum  `json:"entry_protocol"`
	TargetPort     int64                                                           `json:"target_port"`
	TargetProtocol CreateLoadBalancerRequestBody1ForwardingRulesTargetProtocolEnum `json:"target_protocol"`
	TLSPassthrough *bool                                                           `json:"tls_passthrough,omitempty"`
}

type CreateLoadBalancerRequestBody1HealthCheckProtocolEnum string

const (
	CreateLoadBalancerRequestBody1HealthCheckProtocolEnumHTTP  CreateLoadBalancerRequestBody1HealthCheckProtocolEnum = "http"
	CreateLoadBalancerRequestBody1HealthCheckProtocolEnumHTTPS CreateLoadBalancerRequestBody1HealthCheckProtocolEnum = "https"
	CreateLoadBalancerRequestBody1HealthCheckProtocolEnumTCP   CreateLoadBalancerRequestBody1HealthCheckProtocolEnum = "tcp"
)

type CreateLoadBalancerRequestBody1HealthCheck struct {
	CheckIntervalSeconds   *int64                                                 `json:"check_interval_seconds,omitempty"`
	HealthyThreshold       *int64                                                 `json:"healthy_threshold,omitempty"`
	Path                   *string                                                `json:"path,omitempty"`
	Port                   *int64                                                 `json:"port,omitempty"`
	Protocol               *CreateLoadBalancerRequestBody1HealthCheckProtocolEnum `json:"protocol,omitempty"`
	ResponseTimeoutSeconds *int64                                                 `json:"response_timeout_seconds,omitempty"`
	UnhealthyThreshold     *int64                                                 `json:"unhealthy_threshold,omitempty"`
}

type CreateLoadBalancerRequestBody1SizeEnum string

const (
	CreateLoadBalancerRequestBody1SizeEnumLbSmall  CreateLoadBalancerRequestBody1SizeEnum = "lb-small"
	CreateLoadBalancerRequestBody1SizeEnumLbMedium CreateLoadBalancerRequestBody1SizeEnum = "lb-medium"
	CreateLoadBalancerRequestBody1SizeEnumLbLarge  CreateLoadBalancerRequestBody1SizeEnum = "lb-large"
)

type CreateLoadBalancerRequestBody1StatusEnum string

const (
	CreateLoadBalancerRequestBody1StatusEnumNew     CreateLoadBalancerRequestBody1StatusEnum = "new"
	CreateLoadBalancerRequestBody1StatusEnumActive  CreateLoadBalancerRequestBody1StatusEnum = "active"
	CreateLoadBalancerRequestBody1StatusEnumErrored CreateLoadBalancerRequestBody1StatusEnum = "errored"
)

type CreateLoadBalancerRequestBody1StickySessionsTypeEnum string

const (
	CreateLoadBalancerRequestBody1StickySessionsTypeEnumCookies CreateLoadBalancerRequestBody1StickySessionsTypeEnum = "cookies"
	CreateLoadBalancerRequestBody1StickySessionsTypeEnumNone    CreateLoadBalancerRequestBody1StickySessionsTypeEnum = "none"
)

type CreateLoadBalancerRequestBody1StickySessions struct {
	CookieName       *string                                               `json:"cookie_name,omitempty"`
	CookieTTLSeconds *int64                                                `json:"cookie_ttl_seconds,omitempty"`
	Type             *CreateLoadBalancerRequestBody1StickySessionsTypeEnum `json:"type,omitempty"`
}

type CreateLoadBalancerRequestBody1 struct {
	Algorithm              *CreateLoadBalancerRequestBody1AlgorithmEnum                                                                                            `json:"algorithm,omitempty"`
	CreatedAt              *time.Time                                                                                                                              `json:"created_at,omitempty"`
	DropletIds             []int64                                                                                                                                 `json:"droplet_ids"`
	EnableBackendKeepalive *bool                                                                                                                                   `json:"enable_backend_keepalive,omitempty"`
	EnableProxyProtocol    *bool                                                                                                                                   `json:"enable_proxy_protocol,omitempty"`
	ForwardingRules        []CreateLoadBalancerRequestBody1ForwardingRules                                                                                         `json:"forwarding_rules"`
	HealthCheck            *CreateLoadBalancerRequestBody1HealthCheck                                                                                              `json:"health_check,omitempty"`
	ID                     *string                                                                                                                                 `json:"id,omitempty"`
	IP                     *string                                                                                                                                 `json:"ip,omitempty"`
	Name                   *string                                                                                                                                 `json:"name,omitempty"`
	RedirectHTTPToHTTPS    *bool                                                                                                                                   `json:"redirect_http_to_https,omitempty"`
	Region                 shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum `json:"region"`
	Size                   *CreateLoadBalancerRequestBody1SizeEnum                                                                                                 `json:"size,omitempty"`
	Status                 *CreateLoadBalancerRequestBody1StatusEnum                                                                                               `json:"status,omitempty"`
	StickySessions         *CreateLoadBalancerRequestBody1StickySessions                                                                                           `json:"sticky_sessions,omitempty"`
	VpcUUID                *string                                                                                                                                 `json:"vpc_uuid,omitempty"`
}

type CreateLoadBalancerRequestBody2AlgorithmEnum string

const (
	CreateLoadBalancerRequestBody2AlgorithmEnumRoundRobin       CreateLoadBalancerRequestBody2AlgorithmEnum = "round_robin"
	CreateLoadBalancerRequestBody2AlgorithmEnumLeastConnections CreateLoadBalancerRequestBody2AlgorithmEnum = "least_connections"
)

type CreateLoadBalancerRequestBody2ForwardingRulesEntryProtocolEnum string

const (
	CreateLoadBalancerRequestBody2ForwardingRulesEntryProtocolEnumHTTP  CreateLoadBalancerRequestBody2ForwardingRulesEntryProtocolEnum = "http"
	CreateLoadBalancerRequestBody2ForwardingRulesEntryProtocolEnumHTTPS CreateLoadBalancerRequestBody2ForwardingRulesEntryProtocolEnum = "https"
	CreateLoadBalancerRequestBody2ForwardingRulesEntryProtocolEnumHttp2 CreateLoadBalancerRequestBody2ForwardingRulesEntryProtocolEnum = "http2"
	CreateLoadBalancerRequestBody2ForwardingRulesEntryProtocolEnumTCP   CreateLoadBalancerRequestBody2ForwardingRulesEntryProtocolEnum = "tcp"
)

type CreateLoadBalancerRequestBody2ForwardingRulesTargetProtocolEnum string

const (
	CreateLoadBalancerRequestBody2ForwardingRulesTargetProtocolEnumHTTP  CreateLoadBalancerRequestBody2ForwardingRulesTargetProtocolEnum = "http"
	CreateLoadBalancerRequestBody2ForwardingRulesTargetProtocolEnumHTTPS CreateLoadBalancerRequestBody2ForwardingRulesTargetProtocolEnum = "https"
	CreateLoadBalancerRequestBody2ForwardingRulesTargetProtocolEnumHttp2 CreateLoadBalancerRequestBody2ForwardingRulesTargetProtocolEnum = "http2"
	CreateLoadBalancerRequestBody2ForwardingRulesTargetProtocolEnumTCP   CreateLoadBalancerRequestBody2ForwardingRulesTargetProtocolEnum = "tcp"
)

type CreateLoadBalancerRequestBody2ForwardingRules struct {
	CertificateID  *string                                                         `json:"certificate_id,omitempty"`
	EntryPort      int64                                                           `json:"entry_port"`
	EntryProtocol  CreateLoadBalancerRequestBody2ForwardingRulesEntryProtocolEnum  `json:"entry_protocol"`
	TargetPort     int64                                                           `json:"target_port"`
	TargetProtocol CreateLoadBalancerRequestBody2ForwardingRulesTargetProtocolEnum `json:"target_protocol"`
	TLSPassthrough *bool                                                           `json:"tls_passthrough,omitempty"`
}

type CreateLoadBalancerRequestBody2HealthCheckProtocolEnum string

const (
	CreateLoadBalancerRequestBody2HealthCheckProtocolEnumHTTP  CreateLoadBalancerRequestBody2HealthCheckProtocolEnum = "http"
	CreateLoadBalancerRequestBody2HealthCheckProtocolEnumHTTPS CreateLoadBalancerRequestBody2HealthCheckProtocolEnum = "https"
	CreateLoadBalancerRequestBody2HealthCheckProtocolEnumTCP   CreateLoadBalancerRequestBody2HealthCheckProtocolEnum = "tcp"
)

type CreateLoadBalancerRequestBody2HealthCheck struct {
	CheckIntervalSeconds   *int64                                                 `json:"check_interval_seconds,omitempty"`
	HealthyThreshold       *int64                                                 `json:"healthy_threshold,omitempty"`
	Path                   *string                                                `json:"path,omitempty"`
	Port                   *int64                                                 `json:"port,omitempty"`
	Protocol               *CreateLoadBalancerRequestBody2HealthCheckProtocolEnum `json:"protocol,omitempty"`
	ResponseTimeoutSeconds *int64                                                 `json:"response_timeout_seconds,omitempty"`
	UnhealthyThreshold     *int64                                                 `json:"unhealthy_threshold,omitempty"`
}

type CreateLoadBalancerRequestBody2SizeEnum string

const (
	CreateLoadBalancerRequestBody2SizeEnumLbSmall  CreateLoadBalancerRequestBody2SizeEnum = "lb-small"
	CreateLoadBalancerRequestBody2SizeEnumLbMedium CreateLoadBalancerRequestBody2SizeEnum = "lb-medium"
	CreateLoadBalancerRequestBody2SizeEnumLbLarge  CreateLoadBalancerRequestBody2SizeEnum = "lb-large"
)

type CreateLoadBalancerRequestBody2StatusEnum string

const (
	CreateLoadBalancerRequestBody2StatusEnumNew     CreateLoadBalancerRequestBody2StatusEnum = "new"
	CreateLoadBalancerRequestBody2StatusEnumActive  CreateLoadBalancerRequestBody2StatusEnum = "active"
	CreateLoadBalancerRequestBody2StatusEnumErrored CreateLoadBalancerRequestBody2StatusEnum = "errored"
)

type CreateLoadBalancerRequestBody2StickySessionsTypeEnum string

const (
	CreateLoadBalancerRequestBody2StickySessionsTypeEnumCookies CreateLoadBalancerRequestBody2StickySessionsTypeEnum = "cookies"
	CreateLoadBalancerRequestBody2StickySessionsTypeEnumNone    CreateLoadBalancerRequestBody2StickySessionsTypeEnum = "none"
)

type CreateLoadBalancerRequestBody2StickySessions struct {
	CookieName       *string                                               `json:"cookie_name,omitempty"`
	CookieTTLSeconds *int64                                                `json:"cookie_ttl_seconds,omitempty"`
	Type             *CreateLoadBalancerRequestBody2StickySessionsTypeEnum `json:"type,omitempty"`
}

type CreateLoadBalancerRequestBody2 struct {
	Algorithm              *CreateLoadBalancerRequestBody2AlgorithmEnum                                                                                            `json:"algorithm,omitempty"`
	CreatedAt              *time.Time                                                                                                                              `json:"created_at,omitempty"`
	EnableBackendKeepalive *bool                                                                                                                                   `json:"enable_backend_keepalive,omitempty"`
	EnableProxyProtocol    *bool                                                                                                                                   `json:"enable_proxy_protocol,omitempty"`
	ForwardingRules        []CreateLoadBalancerRequestBody2ForwardingRules                                                                                         `json:"forwarding_rules"`
	HealthCheck            *CreateLoadBalancerRequestBody2HealthCheck                                                                                              `json:"health_check,omitempty"`
	ID                     *string                                                                                                                                 `json:"id,omitempty"`
	IP                     *string                                                                                                                                 `json:"ip,omitempty"`
	Name                   *string                                                                                                                                 `json:"name,omitempty"`
	RedirectHTTPToHTTPS    *bool                                                                                                                                   `json:"redirect_http_to_https,omitempty"`
	Region                 shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum `json:"region"`
	Size                   *CreateLoadBalancerRequestBody2SizeEnum                                                                                                 `json:"size,omitempty"`
	Status                 *CreateLoadBalancerRequestBody2StatusEnum                                                                                               `json:"status,omitempty"`
	StickySessions         *CreateLoadBalancerRequestBody2StickySessions                                                                                           `json:"sticky_sessions,omitempty"`
	Tag                    string                                                                                                                                  `json:"tag"`
	VpcUUID                *string                                                                                                                                 `json:"vpc_uuid,omitempty"`
}

type CreateLoadBalancerRequest struct {
	Request interface{} `request:"mediaType=application/json"`
}

type CreateLoadBalancer401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id,omitempty"`
}

type CreateLoadBalancerResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	CreateLoadBalancer202ApplicationJSONAny                   *interface{}
	CreateLoadBalancer401ApplicationJSONObject                *CreateLoadBalancer401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
