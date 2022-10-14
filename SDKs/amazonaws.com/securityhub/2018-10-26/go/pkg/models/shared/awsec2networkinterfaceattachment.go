package shared

type AwsEc2NetworkInterfaceAttachment struct {
	AttachTime          *string `json:"AttachTime,omitempty"`
	AttachmentID        *string `json:"AttachmentId,omitempty"`
	DeleteOnTermination *bool   `json:"DeleteOnTermination,omitempty"`
	DeviceIndex         *int64  `json:"DeviceIndex,omitempty"`
	InstanceID          *string `json:"InstanceId,omitempty"`
	InstanceOwnerID     *string `json:"InstanceOwnerId,omitempty"`
	Status              *string `json:"Status,omitempty"`
}
