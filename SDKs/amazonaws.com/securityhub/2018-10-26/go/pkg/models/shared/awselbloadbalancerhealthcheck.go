package shared

type AwsElbLoadBalancerHealthCheck struct {
	HealthyThreshold   *int64  `json:"HealthyThreshold,omitempty"`
	Interval           *int64  `json:"Interval,omitempty"`
	Target             *string `json:"Target,omitempty"`
	Timeout            *int64  `json:"Timeout,omitempty"`
	UnhealthyThreshold *int64  `json:"UnhealthyThreshold,omitempty"`
}
