package shared

type AwsEc2NetworkInterfaceAttachment struct {
	AttachTime          *string `json:"AttachTime"`
	AttachmentID        *string `json:"AttachmentId"`
	DeleteOnTermination *bool   `json:"DeleteOnTermination"`
	DeviceIndex         *int64  `json:"DeviceIndex"`
	InstanceID          *string `json:"InstanceId"`
	InstanceOwnerID     *string `json:"InstanceOwnerId"`
	Status              *string `json:"Status"`
}
