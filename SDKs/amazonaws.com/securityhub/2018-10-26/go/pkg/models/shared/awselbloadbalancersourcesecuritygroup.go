package shared

// AwsElbLoadBalancerSourceSecurityGroup
// Contains information about the security group for the load balancer.
type AwsElbLoadBalancerSourceSecurityGroup struct {
	GroupName  *string `json:"GroupName,omitempty"`
	OwnerAlias *string `json:"OwnerAlias,omitempty"`
}
