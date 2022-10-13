package shared

type DescribeWorkspaceSnapshotsResult struct {
	RebuildSnapshots []Snapshot `json:"RebuildSnapshots"`
	RestoreSnapshots []Snapshot `json:"RestoreSnapshots"`
}
