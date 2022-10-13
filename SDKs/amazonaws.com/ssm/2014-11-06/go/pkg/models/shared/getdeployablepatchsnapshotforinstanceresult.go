package shared

type GetDeployablePatchSnapshotForInstanceResult struct {
	InstanceID          *string `json:"InstanceId"`
	Product             *string `json:"Product"`
	SnapshotDownloadURL *string `json:"SnapshotDownloadUrl"`
	SnapshotID          *string `json:"SnapshotId"`
}
