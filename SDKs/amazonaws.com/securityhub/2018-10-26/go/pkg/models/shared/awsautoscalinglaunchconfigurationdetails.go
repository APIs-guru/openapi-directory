package shared

// AwsAutoScalingLaunchConfigurationDetails
// Details about a launch configuration.
type AwsAutoScalingLaunchConfigurationDetails struct {
	AssociatePublicIPAddress     *bool                                                         `json:"AssociatePublicIpAddress,omitempty"`
	BlockDeviceMappings          []AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails `json:"BlockDeviceMappings,omitempty"`
	ClassicLinkVpcID             *string                                                       `json:"ClassicLinkVpcId,omitempty"`
	ClassicLinkVpcSecurityGroups []string                                                      `json:"ClassicLinkVpcSecurityGroups,omitempty"`
	CreatedTime                  *string                                                       `json:"CreatedTime,omitempty"`
	EbsOptimized                 *bool                                                         `json:"EbsOptimized,omitempty"`
	IamInstanceProfile           *string                                                       `json:"IamInstanceProfile,omitempty"`
	ImageID                      *string                                                       `json:"ImageId,omitempty"`
	InstanceMonitoring           *AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails   `json:"InstanceMonitoring,omitempty"`
	InstanceType                 *string                                                       `json:"InstanceType,omitempty"`
	KernelID                     *string                                                       `json:"KernelId,omitempty"`
	KeyName                      *string                                                       `json:"KeyName,omitempty"`
	LaunchConfigurationName      *string                                                       `json:"LaunchConfigurationName,omitempty"`
	PlacementTenancy             *string                                                       `json:"PlacementTenancy,omitempty"`
	RamdiskID                    *string                                                       `json:"RamdiskId,omitempty"`
	SecurityGroups               []string                                                      `json:"SecurityGroups,omitempty"`
	SpotPrice                    *string                                                       `json:"SpotPrice,omitempty"`
	UserData                     *string                                                       `json:"UserData,omitempty"`
}
