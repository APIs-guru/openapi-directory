package shared

type AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails struct {
	DeviceName  *string                                                         `json:"DeviceName,omitempty"`
	Ebs         *AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails `json:"Ebs,omitempty"`
	NoDevice    *bool                                                           `json:"NoDevice,omitempty"`
	VirtualName *string                                                         `json:"VirtualName,omitempty"`
}
