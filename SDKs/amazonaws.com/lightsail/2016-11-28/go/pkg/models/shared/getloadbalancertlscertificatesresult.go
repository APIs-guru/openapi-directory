package shared

type GetLoadBalancerTLSCertificatesResult struct {
	TLSCertificates []LoadBalancerTLSCertificate `json:"tlsCertificates,omitempty"`
}
