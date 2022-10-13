package shared

type AwsAutoScalingAutoScalingGroupDetails struct {
	CreatedTime             *string  `json:"CreatedTime"`
	HealthCheckGracePeriod  *int64   `json:"HealthCheckGracePeriod"`
	HealthCheckType         *string  `json:"HealthCheckType"`
	LaunchConfigurationName *string  `json:"LaunchConfigurationName"`
	LoadBalancerNames       []string `json:"LoadBalancerNames"`
}
