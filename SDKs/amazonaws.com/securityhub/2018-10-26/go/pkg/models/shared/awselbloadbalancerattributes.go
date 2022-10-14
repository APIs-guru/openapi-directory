package shared

type AwsElbLoadBalancerAttributes struct {
	AccessLog              *AwsElbLoadBalancerAccessLog              `json:"AccessLog,omitempty"`
	ConnectionDraining     *AwsElbLoadBalancerConnectionDraining     `json:"ConnectionDraining,omitempty"`
	ConnectionSettings     *AwsElbLoadBalancerConnectionSettings     `json:"ConnectionSettings,omitempty"`
	CrossZoneLoadBalancing *AwsElbLoadBalancerCrossZoneLoadBalancing `json:"CrossZoneLoadBalancing,omitempty"`
}
