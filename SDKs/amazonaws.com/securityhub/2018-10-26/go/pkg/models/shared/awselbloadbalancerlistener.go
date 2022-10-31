package shared

type AwsElbLoadBalancerListener struct {
	InstancePort     *int64  `json:"InstancePort,omitempty"`
	InstanceProtocol *string `json:"InstanceProtocol,omitempty"`
	LoadBalancerPort *int64  `json:"LoadBalancerPort,omitempty"`
	Protocol         *string `json:"Protocol,omitempty"`
	SslCertificateID *string `json:"SslCertificateId,omitempty"`
}
