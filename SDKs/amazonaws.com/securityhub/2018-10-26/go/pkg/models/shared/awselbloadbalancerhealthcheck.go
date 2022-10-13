package shared

type AwsElbLoadBalancerHealthCheck struct {
	HealthyThreshold   *int64  `json:"HealthyThreshold"`
	Interval           *int64  `json:"Interval"`
	Target             *string `json:"Target"`
	Timeout            *int64  `json:"Timeout"`
	UnhealthyThreshold *int64  `json:"UnhealthyThreshold"`
}
