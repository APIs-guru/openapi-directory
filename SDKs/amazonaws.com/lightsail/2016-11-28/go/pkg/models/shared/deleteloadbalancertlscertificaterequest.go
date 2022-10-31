package shared



type DeleteLoadBalancerTLSCertificateRequest struct {
    CertificateName string `json:"certificateName"`
    Force *bool `json:"force,omitempty"`
    LoadBalancerName string `json:"loadBalancerName"`
    
}

