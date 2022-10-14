package shared

type AwsEc2VolumeDetails struct {
	Attachments []AwsEc2VolumeAttachment `json:"Attachments,omitempty"`
	CreateTime  *string                  `json:"CreateTime,omitempty"`
	Encrypted   *bool                    `json:"Encrypted,omitempty"`
	KmsKeyID    *string                  `json:"KmsKeyId,omitempty"`
	Size        *int64                   `json:"Size,omitempty"`
	SnapshotID  *string                  `json:"SnapshotId,omitempty"`
	Status      *string                  `json:"Status,omitempty"`
}
