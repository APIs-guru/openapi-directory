package shared

type AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails struct {
	DeleteOnTermination *bool   `json:"DeleteOnTermination"`
	Encrypted           *bool   `json:"Encrypted"`
	Iops                *int64  `json:"Iops"`
	SnapshotID          *string `json:"SnapshotId"`
	VolumeSize          *int64  `json:"VolumeSize"`
	VolumeType          *string `json:"VolumeType"`
}
