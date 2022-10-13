package shared

type CreateInstanceSnapshotRequest struct {
	InstanceName         string `json:"instanceName"`
	InstanceSnapshotName string `json:"instanceSnapshotName"`
	Tags                 []Tag  `json:"tags"`
}
