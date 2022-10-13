package shared

type AttachDiskRequest struct {
	DiskName     string `json:"diskName"`
	DiskPath     string `json:"diskPath"`
	InstanceName string `json:"instanceName"`
}
