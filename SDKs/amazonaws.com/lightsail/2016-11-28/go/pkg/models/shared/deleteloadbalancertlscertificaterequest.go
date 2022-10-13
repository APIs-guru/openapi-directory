package shared

type DeleteLoadBalancerTLSCertificateRequest struct {
	CertificateName  string `json:"certificateName"`
	Force            *bool  `json:"force"`
	LoadBalancerName string `json:"loadBalancerName"`
}
