package shared



type CopySnapshotRequest struct {
    KmsKeyID *string `json:"KmsKeyId,omitempty"`
    SourceSnapshotName string `json:"SourceSnapshotName"`
    Tags []Tag `json:"Tags,omitempty"`
    TargetBucket *string `json:"TargetBucket,omitempty"`
    TargetSnapshotName string `json:"TargetSnapshotName"`
    
}

