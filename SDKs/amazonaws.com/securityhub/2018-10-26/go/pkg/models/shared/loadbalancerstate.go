package shared

// LoadBalancerState
// Information about the state of the load balancer.
type LoadBalancerState struct {
	Code   *string `json:"Code,omitempty"`
	Reason *string `json:"Reason,omitempty"`
}
