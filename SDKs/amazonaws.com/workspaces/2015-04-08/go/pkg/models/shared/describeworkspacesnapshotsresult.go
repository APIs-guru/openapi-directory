package shared



type DescribeWorkspaceSnapshotsResult struct {
    RebuildSnapshots []Snapshot `json:"RebuildSnapshots,omitempty"`
    RestoreSnapshots []Snapshot `json:"RestoreSnapshots,omitempty"`
    
}

