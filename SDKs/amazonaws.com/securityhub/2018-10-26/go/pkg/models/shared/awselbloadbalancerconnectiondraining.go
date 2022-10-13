package shared

type AwsElbLoadBalancerConnectionDraining struct {
	Enabled *bool  `json:"Enabled"`
	Timeout *int64 `json:"Timeout"`
}
