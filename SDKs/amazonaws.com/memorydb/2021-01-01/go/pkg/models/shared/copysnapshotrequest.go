package shared

type CopySnapshotRequest struct {
	KmsKeyID           *string `json:"KmsKeyId"`
	SourceSnapshotName string  `json:"SourceSnapshotName"`
	Tags               []Tag   `json:"Tags"`
	TargetBucket       *string `json:"TargetBucket"`
	TargetSnapshotName string  `json:"TargetSnapshotName"`
}
