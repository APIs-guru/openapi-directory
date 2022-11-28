package shared

// AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails
// A block device for the instance.
type AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails struct {
	DeviceName  *string                                                         `json:"DeviceName,omitempty"`
	Ebs         *AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails `json:"Ebs,omitempty"`
	NoDevice    *bool                                                           `json:"NoDevice,omitempty"`
	VirtualName *string                                                         `json:"VirtualName,omitempty"`
}
