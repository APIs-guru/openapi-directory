package shared

// AwsEc2VolumeAttachment
// An attachment to an Amazon EC2 volume.
type AwsEc2VolumeAttachment struct {
	AttachTime          *string `json:"AttachTime,omitempty"`
	DeleteOnTermination *bool   `json:"DeleteOnTermination,omitempty"`
	InstanceID          *string `json:"InstanceId,omitempty"`
	Status              *string `json:"Status,omitempty"`
}
