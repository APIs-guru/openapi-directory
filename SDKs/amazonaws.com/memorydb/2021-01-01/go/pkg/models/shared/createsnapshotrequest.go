package shared



type CreateSnapshotRequest struct {
    ClusterName string `json:"ClusterName"`
    KmsKeyID *string `json:"KmsKeyId,omitempty"`
    SnapshotName string `json:"SnapshotName"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

