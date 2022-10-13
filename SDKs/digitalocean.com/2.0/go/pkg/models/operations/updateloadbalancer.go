package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type UpdateLoadBalancerPathParams struct {
	LbID string `pathParam:"style=simple,explode=false,name=lb_id"`
}

type UpdateLoadBalancerRequestBody1AlgorithmEnum string

const (
	UpdateLoadBalancerRequestBody1AlgorithmEnumRoundRobin       UpdateLoadBalancerRequestBody1AlgorithmEnum = "round_robin"
	UpdateLoadBalancerRequestBody1AlgorithmEnumLeastConnections UpdateLoadBalancerRequestBody1AlgorithmEnum = "least_connections"
)

type UpdateLoadBalancerRequestBody1ForwardingRulesEntryProtocolEnum string

const (
	UpdateLoadBalancerRequestBody1ForwardingRulesEntryProtocolEnumHTTP  UpdateLoadBalancerRequestBody1ForwardingRulesEntryProtocolEnum = "http"
	UpdateLoadBalancerRequestBody1ForwardingRulesEntryProtocolEnumHTTPS UpdateLoadBalancerRequestBody1ForwardingRulesEntryProtocolEnum = "https"
	UpdateLoadBalancerRequestBody1ForwardingRulesEntryProtocolEnumHttp2 UpdateLoadBalancerRequestBody1ForwardingRulesEntryProtocolEnum = "http2"
	UpdateLoadBalancerRequestBody1ForwardingRulesEntryProtocolEnumTCP   UpdateLoadBalancerRequestBody1ForwardingRulesEntryProtocolEnum = "tcp"
)

type UpdateLoadBalancerRequestBody1ForwardingRulesTargetProtocolEnum string

const (
	UpdateLoadBalancerRequestBody1ForwardingRulesTargetProtocolEnumHTTP  UpdateLoadBalancerRequestBody1ForwardingRulesTargetProtocolEnum = "http"
	UpdateLoadBalancerRequestBody1ForwardingRulesTargetProtocolEnumHTTPS UpdateLoadBalancerRequestBody1ForwardingRulesTargetProtocolEnum = "https"
	UpdateLoadBalancerRequestBody1ForwardingRulesTargetProtocolEnumHttp2 UpdateLoadBalancerRequestBody1ForwardingRulesTargetProtocolEnum = "http2"
	UpdateLoadBalancerRequestBody1ForwardingRulesTargetProtocolEnumTCP   UpdateLoadBalancerRequestBody1ForwardingRulesTargetProtocolEnum = "tcp"
)

type UpdateLoadBalancerRequestBody1ForwardingRules struct {
	CertificateID  *string                                                         `json:"certificate_id"`
	EntryPort      int64                                                           `json:"entry_port"`
	EntryProtocol  UpdateLoadBalancerRequestBody1ForwardingRulesEntryProtocolEnum  `json:"entry_protocol"`
	TargetPort     int64                                                           `json:"target_port"`
	TargetProtocol UpdateLoadBalancerRequestBody1ForwardingRulesTargetProtocolEnum `json:"target_protocol"`
	TLSPassthrough *bool                                                           `json:"tls_passthrough"`
}

type UpdateLoadBalancerRequestBody1HealthCheckProtocolEnum string

const (
	UpdateLoadBalancerRequestBody1HealthCheckProtocolEnumHTTP  UpdateLoadBalancerRequestBody1HealthCheckProtocolEnum = "http"
	UpdateLoadBalancerRequestBody1HealthCheckProtocolEnumHTTPS UpdateLoadBalancerRequestBody1HealthCheckProtocolEnum = "https"
	UpdateLoadBalancerRequestBody1HealthCheckProtocolEnumTCP   UpdateLoadBalancerRequestBody1HealthCheckProtocolEnum = "tcp"
)

type UpdateLoadBalancerRequestBody1HealthCheck struct {
	CheckIntervalSeconds   *int64                                                 `json:"check_interval_seconds"`
	HealthyThreshold       *int64                                                 `json:"healthy_threshold"`
	Path                   *string                                                `json:"path"`
	Port                   *int64                                                 `json:"port"`
	Protocol               *UpdateLoadBalancerRequestBody1HealthCheckProtocolEnum `json:"protocol"`
	ResponseTimeoutSeconds *int64                                                 `json:"response_timeout_seconds"`
	UnhealthyThreshold     *int64                                                 `json:"unhealthy_threshold"`
}

type UpdateLoadBalancerRequestBody1SizeEnum string

const (
	UpdateLoadBalancerRequestBody1SizeEnumLbSmall  UpdateLoadBalancerRequestBody1SizeEnum = "lb-small"
	UpdateLoadBalancerRequestBody1SizeEnumLbMedium UpdateLoadBalancerRequestBody1SizeEnum = "lb-medium"
	UpdateLoadBalancerRequestBody1SizeEnumLbLarge  UpdateLoadBalancerRequestBody1SizeEnum = "lb-large"
)

type UpdateLoadBalancerRequestBody1StatusEnum string

const (
	UpdateLoadBalancerRequestBody1StatusEnumNew     UpdateLoadBalancerRequestBody1StatusEnum = "new"
	UpdateLoadBalancerRequestBody1StatusEnumActive  UpdateLoadBalancerRequestBody1StatusEnum = "active"
	UpdateLoadBalancerRequestBody1StatusEnumErrored UpdateLoadBalancerRequestBody1StatusEnum = "errored"
)

type UpdateLoadBalancerRequestBody1StickySessionsTypeEnum string

const (
	UpdateLoadBalancerRequestBody1StickySessionsTypeEnumCookies UpdateLoadBalancerRequestBody1StickySessionsTypeEnum = "cookies"
	UpdateLoadBalancerRequestBody1StickySessionsTypeEnumNone    UpdateLoadBalancerRequestBody1StickySessionsTypeEnum = "none"
)

type UpdateLoadBalancerRequestBody1StickySessions struct {
	CookieName       *string                                               `json:"cookie_name"`
	CookieTTLSeconds *int64                                                `json:"cookie_ttl_seconds"`
	Type             *UpdateLoadBalancerRequestBody1StickySessionsTypeEnum `json:"type"`
}

type UpdateLoadBalancerRequestBody1 struct {
	Algorithm              *UpdateLoadBalancerRequestBody1AlgorithmEnum                                                                                            `json:"algorithm"`
	CreatedAt              *time.Time                                                                                                                              `json:"created_at"`
	DropletIds             []int64                                                                                                                                 `json:"droplet_ids"`
	EnableBackendKeepalive *bool                                                                                                                                   `json:"enable_backend_keepalive"`
	EnableProxyProtocol    *bool                                                                                                                                   `json:"enable_proxy_protocol"`
	ForwardingRules        []UpdateLoadBalancerRequestBody1ForwardingRules                                                                                         `json:"forwarding_rules"`
	HealthCheck            *UpdateLoadBalancerRequestBody1HealthCheck                                                                                              `json:"health_check"`
	ID                     *string                                                                                                                                 `json:"id"`
	IP                     *string                                                                                                                                 `json:"ip"`
	Name                   *string                                                                                                                                 `json:"name"`
	RedirectHTTPToHTTPS    *bool                                                                                                                                   `json:"redirect_http_to_https"`
	Region                 shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum `json:"region"`
	Size                   *UpdateLoadBalancerRequestBody1SizeEnum                                                                                                 `json:"size"`
	Status                 *UpdateLoadBalancerRequestBody1StatusEnum                                                                                               `json:"status"`
	StickySessions         *UpdateLoadBalancerRequestBody1StickySessions                                                                                           `json:"sticky_sessions"`
	VpcUUID                *string                                                                                                                                 `json:"vpc_uuid"`
}

type UpdateLoadBalancerRequestBody2AlgorithmEnum string

const (
	UpdateLoadBalancerRequestBody2AlgorithmEnumRoundRobin       UpdateLoadBalancerRequestBody2AlgorithmEnum = "round_robin"
	UpdateLoadBalancerRequestBody2AlgorithmEnumLeastConnections UpdateLoadBalancerRequestBody2AlgorithmEnum = "least_connections"
)

type UpdateLoadBalancerRequestBody2ForwardingRulesEntryProtocolEnum string

const (
	UpdateLoadBalancerRequestBody2ForwardingRulesEntryProtocolEnumHTTP  UpdateLoadBalancerRequestBody2ForwardingRulesEntryProtocolEnum = "http"
	UpdateLoadBalancerRequestBody2ForwardingRulesEntryProtocolEnumHTTPS UpdateLoadBalancerRequestBody2ForwardingRulesEntryProtocolEnum = "https"
	UpdateLoadBalancerRequestBody2ForwardingRulesEntryProtocolEnumHttp2 UpdateLoadBalancerRequestBody2ForwardingRulesEntryProtocolEnum = "http2"
	UpdateLoadBalancerRequestBody2ForwardingRulesEntryProtocolEnumTCP   UpdateLoadBalancerRequestBody2ForwardingRulesEntryProtocolEnum = "tcp"
)

type UpdateLoadBalancerRequestBody2ForwardingRulesTargetProtocolEnum string

const (
	UpdateLoadBalancerRequestBody2ForwardingRulesTargetProtocolEnumHTTP  UpdateLoadBalancerRequestBody2ForwardingRulesTargetProtocolEnum = "http"
	UpdateLoadBalancerRequestBody2ForwardingRulesTargetProtocolEnumHTTPS UpdateLoadBalancerRequestBody2ForwardingRulesTargetProtocolEnum = "https"
	UpdateLoadBalancerRequestBody2ForwardingRulesTargetProtocolEnumHttp2 UpdateLoadBalancerRequestBody2ForwardingRulesTargetProtocolEnum = "http2"
	UpdateLoadBalancerRequestBody2ForwardingRulesTargetProtocolEnumTCP   UpdateLoadBalancerRequestBody2ForwardingRulesTargetProtocolEnum = "tcp"
)

type UpdateLoadBalancerRequestBody2ForwardingRules struct {
	CertificateID  *string                                                         `json:"certificate_id"`
	EntryPort      int64                                                           `json:"entry_port"`
	EntryProtocol  UpdateLoadBalancerRequestBody2ForwardingRulesEntryProtocolEnum  `json:"entry_protocol"`
	TargetPort     int64                                                           `json:"target_port"`
	TargetProtocol UpdateLoadBalancerRequestBody2ForwardingRulesTargetProtocolEnum `json:"target_protocol"`
	TLSPassthrough *bool                                                           `json:"tls_passthrough"`
}

type UpdateLoadBalancerRequestBody2HealthCheckProtocolEnum string

const (
	UpdateLoadBalancerRequestBody2HealthCheckProtocolEnumHTTP  UpdateLoadBalancerRequestBody2HealthCheckProtocolEnum = "http"
	UpdateLoadBalancerRequestBody2HealthCheckProtocolEnumHTTPS UpdateLoadBalancerRequestBody2HealthCheckProtocolEnum = "https"
	UpdateLoadBalancerRequestBody2HealthCheckProtocolEnumTCP   UpdateLoadBalancerRequestBody2HealthCheckProtocolEnum = "tcp"
)

type UpdateLoadBalancerRequestBody2HealthCheck struct {
	CheckIntervalSeconds   *int64                                                 `json:"check_interval_seconds"`
	HealthyThreshold       *int64                                                 `json:"healthy_threshold"`
	Path                   *string                                                `json:"path"`
	Port                   *int64                                                 `json:"port"`
	Protocol               *UpdateLoadBalancerRequestBody2HealthCheckProtocolEnum `json:"protocol"`
	ResponseTimeoutSeconds *int64                                                 `json:"response_timeout_seconds"`
	UnhealthyThreshold     *int64                                                 `json:"unhealthy_threshold"`
}

type UpdateLoadBalancerRequestBody2SizeEnum string

const (
	UpdateLoadBalancerRequestBody2SizeEnumLbSmall  UpdateLoadBalancerRequestBody2SizeEnum = "lb-small"
	UpdateLoadBalancerRequestBody2SizeEnumLbMedium UpdateLoadBalancerRequestBody2SizeEnum = "lb-medium"
	UpdateLoadBalancerRequestBody2SizeEnumLbLarge  UpdateLoadBalancerRequestBody2SizeEnum = "lb-large"
)

type UpdateLoadBalancerRequestBody2StatusEnum string

const (
	UpdateLoadBalancerRequestBody2StatusEnumNew     UpdateLoadBalancerRequestBody2StatusEnum = "new"
	UpdateLoadBalancerRequestBody2StatusEnumActive  UpdateLoadBalancerRequestBody2StatusEnum = "active"
	UpdateLoadBalancerRequestBody2StatusEnumErrored UpdateLoadBalancerRequestBody2StatusEnum = "errored"
)

type UpdateLoadBalancerRequestBody2StickySessionsTypeEnum string

const (
	UpdateLoadBalancerRequestBody2StickySessionsTypeEnumCookies UpdateLoadBalancerRequestBody2StickySessionsTypeEnum = "cookies"
	UpdateLoadBalancerRequestBody2StickySessionsTypeEnumNone    UpdateLoadBalancerRequestBody2StickySessionsTypeEnum = "none"
)

type UpdateLoadBalancerRequestBody2StickySessions struct {
	CookieName       *string                                               `json:"cookie_name"`
	CookieTTLSeconds *int64                                                `json:"cookie_ttl_seconds"`
	Type             *UpdateLoadBalancerRequestBody2StickySessionsTypeEnum `json:"type"`
}

type UpdateLoadBalancerRequestBody2 struct {
	Algorithm              *UpdateLoadBalancerRequestBody2AlgorithmEnum                                                                                            `json:"algorithm"`
	CreatedAt              *time.Time                                                                                                                              `json:"created_at"`
	EnableBackendKeepalive *bool                                                                                                                                   `json:"enable_backend_keepalive"`
	EnableProxyProtocol    *bool                                                                                                                                   `json:"enable_proxy_protocol"`
	ForwardingRules        []UpdateLoadBalancerRequestBody2ForwardingRules                                                                                         `json:"forwarding_rules"`
	HealthCheck            *UpdateLoadBalancerRequestBody2HealthCheck                                                                                              `json:"health_check"`
	ID                     *string                                                                                                                                 `json:"id"`
	IP                     *string                                                                                                                                 `json:"ip"`
	Name                   *string                                                                                                                                 `json:"name"`
	RedirectHTTPToHTTPS    *bool                                                                                                                                   `json:"redirect_http_to_https"`
	Region                 shared.Onev21dropletsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDropletsItemsPropertiesImagePropertiesRegionsItemsEnum `json:"region"`
	Size                   *UpdateLoadBalancerRequestBody2SizeEnum                                                                                                 `json:"size"`
	Status                 *UpdateLoadBalancerRequestBody2StatusEnum                                                                                               `json:"status"`
	StickySessions         *UpdateLoadBalancerRequestBody2StickySessions                                                                                           `json:"sticky_sessions"`
	Tag                    string                                                                                                                                  `json:"tag"`
	VpcUUID                *string                                                                                                                                 `json:"vpc_uuid"`
}

type UpdateLoadBalancerRequest struct {
	PathParams UpdateLoadBalancerPathParams
	Request    interface{} `request:"mediaType=application/json"`
}

type UpdateLoadBalancer401ApplicationJSON struct {
	ID        string  `json:"id"`
	Message   string  `json:"message"`
	RequestID *string `json:"request_id"`
}

type UpdateLoadBalancerResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	UpdateLoadBalancer200ApplicationJSONAny                   *interface{}
	UpdateLoadBalancer401ApplicationJSONObject                *UpdateLoadBalancer401ApplicationJSON
	Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema
}
