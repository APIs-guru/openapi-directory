package shared

// AwsElbLoadBalancerAttributes
// Contains attributes for the load balancer.
type AwsElbLoadBalancerAttributes struct {
	AccessLog              *AwsElbLoadBalancerAccessLog              `json:"AccessLog,omitempty"`
	ConnectionDraining     *AwsElbLoadBalancerConnectionDraining     `json:"ConnectionDraining,omitempty"`
	ConnectionSettings     *AwsElbLoadBalancerConnectionSettings     `json:"ConnectionSettings,omitempty"`
	CrossZoneLoadBalancing *AwsElbLoadBalancerCrossZoneLoadBalancing `json:"CrossZoneLoadBalancing,omitempty"`
}
