package shared

type CreateDiskFromSnapshotRequest struct {
	AddOns                          []AddOnRequest `json:"addOns,omitempty"`
	AvailabilityZone                string         `json:"availabilityZone"`
	DiskName                        string         `json:"diskName"`
	DiskSnapshotName                *string        `json:"diskSnapshotName,omitempty"`
	RestoreDate                     *string        `json:"restoreDate,omitempty"`
	SizeInGb                        int64          `json:"sizeInGb"`
	SourceDiskName                  *string        `json:"sourceDiskName,omitempty"`
	Tags                            []Tag          `json:"tags,omitempty"`
	UseLatestRestorableAutoSnapshot *bool          `json:"useLatestRestorableAutoSnapshot,omitempty"`
}
