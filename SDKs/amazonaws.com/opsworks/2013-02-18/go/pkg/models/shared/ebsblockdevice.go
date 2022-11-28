package shared

// EbsBlockDevice
// Describes an Amazon EBS volume. This data type maps directly to the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EbsBlockDevice.html">EbsBlockDevice</a> data type.
type EbsBlockDevice struct {
	DeleteOnTermination *bool           `json:"DeleteOnTermination,omitempty"`
	Iops                *int64          `json:"Iops,omitempty"`
	SnapshotID          *string         `json:"SnapshotId,omitempty"`
	VolumeSize          *int64          `json:"VolumeSize,omitempty"`
	VolumeType          *VolumeTypeEnum `json:"VolumeType,omitempty"`
}
