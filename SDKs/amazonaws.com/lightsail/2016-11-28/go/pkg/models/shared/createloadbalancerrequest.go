package shared

type CreateLoadBalancerRequest struct {
	CertificateAlternativeNames []string           `json:"certificateAlternativeNames"`
	CertificateDomainName       *string            `json:"certificateDomainName"`
	CertificateName             *string            `json:"certificateName"`
	HealthCheckPath             *string            `json:"healthCheckPath"`
	InstancePort                int64              `json:"instancePort"`
	IPAddressType               *IPAddressTypeEnum `json:"ipAddressType"`
	LoadBalancerName            string             `json:"loadBalancerName"`
	Tags                        []Tag              `json:"tags"`
}
