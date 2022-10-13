package shared

type AwsEc2VolumeDetails struct {
	Attachments []AwsEc2VolumeAttachment `json:"Attachments"`
	CreateTime  *string                  `json:"CreateTime"`
	Encrypted   *bool                    `json:"Encrypted"`
	KmsKeyID    *string                  `json:"KmsKeyId"`
	Size        *int64                   `json:"Size"`
	SnapshotID  *string                  `json:"SnapshotId"`
	Status      *string                  `json:"Status"`
}
