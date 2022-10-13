package shared

import (
	"time"
)

type LoadBalancer struct {
	Arn                     *string                             `json:"arn"`
	ConfigurationOptions    map[string]string                   `json:"configurationOptions"`
	CreatedAt               *time.Time                          `json:"createdAt"`
	DNSName                 *string                             `json:"dnsName"`
	HealthCheckPath         *string                             `json:"healthCheckPath"`
	InstanceHealthSummary   []InstanceHealthSummary             `json:"instanceHealthSummary"`
	InstancePort            *int64                              `json:"instancePort"`
	IPAddressType           *IPAddressTypeEnum                  `json:"ipAddressType"`
	Location                *ResourceLocation                   `json:"location"`
	Name                    *string                             `json:"name"`
	Protocol                *LoadBalancerProtocolEnum           `json:"protocol"`
	PublicPorts             []int64                             `json:"publicPorts"`
	ResourceType            *ResourceTypeEnum                   `json:"resourceType"`
	State                   *LoadBalancerStateEnum              `json:"state"`
	SupportCode             *string                             `json:"supportCode"`
	Tags                    []Tag                               `json:"tags"`
	TLSCertificateSummaries []LoadBalancerTLSCertificateSummary `json:"tlsCertificateSummaries"`
}
