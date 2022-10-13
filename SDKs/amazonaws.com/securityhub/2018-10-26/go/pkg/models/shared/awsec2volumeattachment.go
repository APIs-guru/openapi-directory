package shared

type AwsEc2VolumeAttachment struct {
	AttachTime          *string `json:"AttachTime"`
	DeleteOnTermination *bool   `json:"DeleteOnTermination"`
	InstanceID          *string `json:"InstanceId"`
	Status              *string `json:"Status"`
}
