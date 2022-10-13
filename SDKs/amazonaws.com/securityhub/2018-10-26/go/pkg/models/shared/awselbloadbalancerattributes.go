package shared

type AwsElbLoadBalancerAttributes struct {
	AccessLog              *AwsElbLoadBalancerAccessLog              `json:"AccessLog"`
	ConnectionDraining     *AwsElbLoadBalancerConnectionDraining     `json:"ConnectionDraining"`
	ConnectionSettings     *AwsElbLoadBalancerConnectionSettings     `json:"ConnectionSettings"`
	CrossZoneLoadBalancing *AwsElbLoadBalancerCrossZoneLoadBalancing `json:"CrossZoneLoadBalancing"`
}
