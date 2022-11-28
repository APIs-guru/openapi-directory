package shared

// AwsEcsServiceLoadBalancersDetails
// Information about a load balancer that the service uses.
type AwsEcsServiceLoadBalancersDetails struct {
	ContainerName    *string `json:"ContainerName,omitempty"`
	ContainerPort    *int64  `json:"ContainerPort,omitempty"`
	LoadBalancerName *string `json:"LoadBalancerName,omitempty"`
	TargetGroupArn   *string `json:"TargetGroupArn,omitempty"`
}
