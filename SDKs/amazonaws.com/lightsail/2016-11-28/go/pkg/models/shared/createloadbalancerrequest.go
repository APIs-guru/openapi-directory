package shared

type CreateLoadBalancerRequest struct {
	CertificateAlternativeNames []string           `json:"certificateAlternativeNames,omitempty"`
	CertificateDomainName       *string            `json:"certificateDomainName,omitempty"`
	CertificateName             *string            `json:"certificateName,omitempty"`
	HealthCheckPath             *string            `json:"healthCheckPath,omitempty"`
	InstancePort                int64              `json:"instancePort"`
	IPAddressType               *IPAddressTypeEnum `json:"ipAddressType,omitempty"`
	LoadBalancerName            string             `json:"loadBalancerName"`
	Tags                        []Tag              `json:"tags,omitempty"`
}
