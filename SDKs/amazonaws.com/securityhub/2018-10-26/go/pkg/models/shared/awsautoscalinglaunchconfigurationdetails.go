package shared

type AwsAutoScalingLaunchConfigurationDetails struct {
	AssociatePublicIPAddress     *bool                                                         `json:"AssociatePublicIpAddress"`
	BlockDeviceMappings          []AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails `json:"BlockDeviceMappings"`
	ClassicLinkVpcID             *string                                                       `json:"ClassicLinkVpcId"`
	ClassicLinkVpcSecurityGroups []string                                                      `json:"ClassicLinkVpcSecurityGroups"`
	CreatedTime                  *string                                                       `json:"CreatedTime"`
	EbsOptimized                 *bool                                                         `json:"EbsOptimized"`
	IamInstanceProfile           *string                                                       `json:"IamInstanceProfile"`
	ImageID                      *string                                                       `json:"ImageId"`
	InstanceMonitoring           *AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails   `json:"InstanceMonitoring"`
	InstanceType                 *string                                                       `json:"InstanceType"`
	KernelID                     *string                                                       `json:"KernelId"`
	KeyName                      *string                                                       `json:"KeyName"`
	LaunchConfigurationName      *string                                                       `json:"LaunchConfigurationName"`
	PlacementTenancy             *string                                                       `json:"PlacementTenancy"`
	RamdiskID                    *string                                                       `json:"RamdiskId"`
	SecurityGroups               []string                                                      `json:"SecurityGroups"`
	SpotPrice                    *string                                                       `json:"SpotPrice"`
	UserData                     *string                                                       `json:"UserData"`
}
