package shared



type CreateDiskSnapshotRequest struct {
    DiskName *string `json:"diskName,omitempty"`
    DiskSnapshotName string `json:"diskSnapshotName"`
    InstanceName *string `json:"instanceName,omitempty"`
    Tags []Tag `json:"tags,omitempty"`
    
}

