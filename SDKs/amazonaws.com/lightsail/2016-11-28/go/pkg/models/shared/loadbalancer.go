package shared

import (
	"time"
)

type LoadBalancer struct {
	Arn                     *string                             `json:"arn,omitempty"`
	ConfigurationOptions    map[string]string                   `json:"configurationOptions,omitempty"`
	CreatedAt               *time.Time                          `json:"createdAt,omitempty"`
	DNSName                 *string                             `json:"dnsName,omitempty"`
	HealthCheckPath         *string                             `json:"healthCheckPath,omitempty"`
	InstanceHealthSummary   []InstanceHealthSummary             `json:"instanceHealthSummary,omitempty"`
	InstancePort            *int64                              `json:"instancePort,omitempty"`
	IPAddressType           *IPAddressTypeEnum                  `json:"ipAddressType,omitempty"`
	Location                *ResourceLocation                   `json:"location,omitempty"`
	Name                    *string                             `json:"name,omitempty"`
	Protocol                *LoadBalancerProtocolEnum           `json:"protocol,omitempty"`
	PublicPorts             []int64                             `json:"publicPorts,omitempty"`
	ResourceType            *ResourceTypeEnum                   `json:"resourceType,omitempty"`
	State                   *LoadBalancerStateEnum              `json:"state,omitempty"`
	SupportCode             *string                             `json:"supportCode,omitempty"`
	Tags                    []Tag                               `json:"tags,omitempty"`
	TLSCertificateSummaries []LoadBalancerTLSCertificateSummary `json:"tlsCertificateSummaries,omitempty"`
}
