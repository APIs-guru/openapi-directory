package shared

type CreateLoadBalancerTLSCertificateRequest struct {
	CertificateAlternativeNames []string `json:"certificateAlternativeNames,omitempty"`
	CertificateDomainName       string   `json:"certificateDomainName"`
	CertificateName             string   `json:"certificateName"`
	LoadBalancerName            string   `json:"loadBalancerName"`
	Tags                        []Tag    `json:"tags,omitempty"`
}
