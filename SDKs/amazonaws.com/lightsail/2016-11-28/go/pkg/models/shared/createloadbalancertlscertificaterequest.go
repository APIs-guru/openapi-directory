package shared

type CreateLoadBalancerTLSCertificateRequest struct {
	CertificateAlternativeNames []string `json:"certificateAlternativeNames"`
	CertificateDomainName       string   `json:"certificateDomainName"`
	CertificateName             string   `json:"certificateName"`
	LoadBalancerName            string   `json:"loadBalancerName"`
	Tags                        []Tag    `json:"tags"`
}
