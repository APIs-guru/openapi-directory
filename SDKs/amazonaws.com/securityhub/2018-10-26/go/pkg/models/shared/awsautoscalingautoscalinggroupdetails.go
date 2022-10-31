package shared



type AwsAutoScalingAutoScalingGroupDetails struct {
    CreatedTime *string `json:"CreatedTime,omitempty"`
    HealthCheckGracePeriod *int64 `json:"HealthCheckGracePeriod,omitempty"`
    HealthCheckType *string `json:"HealthCheckType,omitempty"`
    LaunchConfigurationName *string `json:"LaunchConfigurationName,omitempty"`
    LoadBalancerNames []string `json:"LoadBalancerNames,omitempty"`
    
}

