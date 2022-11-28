package shared

// AwsElbLoadBalancerBackendServerDescription
// Provides information about the configuration of an EC2 instance for the load balancer.
type AwsElbLoadBalancerBackendServerDescription struct {
	InstancePort *int64   `json:"InstancePort,omitempty"`
	PolicyNames  []string `json:"PolicyNames,omitempty"`
}
