package shared



type CopySnapshotRequest struct {
    RestoreDate *string `json:"restoreDate,omitempty"`
    SourceRegion RegionNameEnum `json:"sourceRegion"`
    SourceResourceName *string `json:"sourceResourceName,omitempty"`
    SourceSnapshotName *string `json:"sourceSnapshotName,omitempty"`
    TargetSnapshotName string `json:"targetSnapshotName"`
    UseLatestRestorableAutoSnapshot *bool `json:"useLatestRestorableAutoSnapshot,omitempty"`
    
}

