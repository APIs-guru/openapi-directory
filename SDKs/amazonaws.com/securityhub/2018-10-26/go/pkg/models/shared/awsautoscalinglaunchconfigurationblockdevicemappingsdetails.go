package shared

type AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails struct {
	DeviceName  *string                                                         `json:"DeviceName"`
	Ebs         *AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails `json:"Ebs"`
	NoDevice    *bool                                                           `json:"NoDevice"`
	VirtualName *string                                                         `json:"VirtualName"`
}
