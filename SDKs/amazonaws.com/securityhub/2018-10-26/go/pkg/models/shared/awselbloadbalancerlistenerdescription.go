package shared

// AwsElbLoadBalancerListenerDescription
// Lists the policies that are enabled for a load balancer listener.
type AwsElbLoadBalancerListenerDescription struct {
	Listener    *AwsElbLoadBalancerListener `json:"Listener,omitempty"`
	PolicyNames []string                    `json:"PolicyNames,omitempty"`
}
