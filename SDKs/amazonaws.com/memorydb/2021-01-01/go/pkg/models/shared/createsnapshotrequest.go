package shared

type CreateSnapshotRequest struct {
	ClusterName  string  `json:"ClusterName"`
	KmsKeyID     *string `json:"KmsKeyId"`
	SnapshotName string  `json:"SnapshotName"`
	Tags         []Tag   `json:"Tags"`
}
