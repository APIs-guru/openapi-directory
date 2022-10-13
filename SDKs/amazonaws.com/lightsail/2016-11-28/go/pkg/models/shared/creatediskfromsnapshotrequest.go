package shared

type CreateDiskFromSnapshotRequest struct {
	AddOns                          []AddOnRequest `json:"addOns"`
	AvailabilityZone                string         `json:"availabilityZone"`
	DiskName                        string         `json:"diskName"`
	DiskSnapshotName                *string        `json:"diskSnapshotName"`
	RestoreDate                     *string        `json:"restoreDate"`
	SizeInGb                        int64          `json:"sizeInGb"`
	SourceDiskName                  *string        `json:"sourceDiskName"`
	Tags                            []Tag          `json:"tags"`
	UseLatestRestorableAutoSnapshot *bool          `json:"useLatestRestorableAutoSnapshot"`
}
