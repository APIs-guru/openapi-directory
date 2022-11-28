package shared

// AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails
// Parameters that are used to automatically set up EBS volumes when an instance is launched.
type AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails struct {
	DeleteOnTermination *bool   `json:"DeleteOnTermination,omitempty"`
	Encrypted           *bool   `json:"Encrypted,omitempty"`
	Iops                *int64  `json:"Iops,omitempty"`
	SnapshotID          *string `json:"SnapshotId,omitempty"`
	VolumeSize          *int64  `json:"VolumeSize,omitempty"`
	VolumeType          *string `json:"VolumeType,omitempty"`
}
