package shared

// AwsElbLoadBalancerConnectionDraining
// Contains information about the connection draining configuration for the load balancer.
type AwsElbLoadBalancerConnectionDraining struct {
	Enabled *bool  `json:"Enabled,omitempty"`
	Timeout *int64 `json:"Timeout,omitempty"`
}
