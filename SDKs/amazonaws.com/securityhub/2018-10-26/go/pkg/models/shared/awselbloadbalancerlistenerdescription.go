package shared

type AwsElbLoadBalancerListenerDescription struct {
	Listener    *AwsElbLoadBalancerListener `json:"Listener"`
	PolicyNames []string                    `json:"PolicyNames"`
}
