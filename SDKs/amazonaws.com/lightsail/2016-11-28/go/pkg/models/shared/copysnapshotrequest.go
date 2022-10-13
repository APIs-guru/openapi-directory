package shared

type CopySnapshotRequest struct {
	RestoreDate                     *string        `json:"restoreDate"`
	SourceRegion                    RegionNameEnum `json:"sourceRegion"`
	SourceResourceName              *string        `json:"sourceResourceName"`
	SourceSnapshotName              *string        `json:"sourceSnapshotName"`
	TargetSnapshotName              string         `json:"targetSnapshotName"`
	UseLatestRestorableAutoSnapshot *bool          `json:"useLatestRestorableAutoSnapshot"`
}
