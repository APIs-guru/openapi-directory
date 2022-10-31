package shared

type AttachLoadBalancerTLSCertificateRequest struct {
	CertificateName  string `json:"certificateName"`
	LoadBalancerName string `json:"loadBalancerName"`
}
