package shared

type GetDeployablePatchSnapshotForInstanceResult struct {
	InstanceID          *string `json:"InstanceId,omitempty"`
	Product             *string `json:"Product,omitempty"`
	SnapshotDownloadURL *string `json:"SnapshotDownloadUrl,omitempty"`
	SnapshotID          *string `json:"SnapshotId,omitempty"`
}
