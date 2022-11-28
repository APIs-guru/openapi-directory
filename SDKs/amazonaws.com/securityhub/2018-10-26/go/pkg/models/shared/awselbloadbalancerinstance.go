package shared

// AwsElbLoadBalancerInstance
// Provides information about an EC2 instance for a load balancer.
type AwsElbLoadBalancerInstance struct {
	InstanceID *string `json:"InstanceId,omitempty"`
}
