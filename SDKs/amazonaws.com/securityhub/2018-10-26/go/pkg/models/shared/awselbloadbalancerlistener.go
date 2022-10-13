package shared

type AwsElbLoadBalancerListener struct {
	InstancePort     *int64  `json:"InstancePort"`
	InstanceProtocol *string `json:"InstanceProtocol"`
	LoadBalancerPort *int64  `json:"LoadBalancerPort"`
	Protocol         *string `json:"Protocol"`
	SslCertificateID *string `json:"SslCertificateId"`
}
