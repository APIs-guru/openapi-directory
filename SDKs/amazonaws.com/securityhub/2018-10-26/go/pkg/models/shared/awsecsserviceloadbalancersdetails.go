package shared

type AwsEcsServiceLoadBalancersDetails struct {
	ContainerName    *string `json:"ContainerName"`
	ContainerPort    *int64  `json:"ContainerPort"`
	LoadBalancerName *string `json:"LoadBalancerName"`
	TargetGroupArn   *string `json:"TargetGroupArn"`
}
