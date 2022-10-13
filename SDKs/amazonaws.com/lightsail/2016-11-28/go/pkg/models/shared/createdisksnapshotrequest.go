package shared

type CreateDiskSnapshotRequest struct {
	DiskName         *string `json:"diskName"`
	DiskSnapshotName string  `json:"diskSnapshotName"`
	InstanceName     *string `json:"instanceName"`
	Tags             []Tag   `json:"tags"`
}
