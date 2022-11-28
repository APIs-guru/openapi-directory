package shared

type BatchDeleteClusterSnapshotsResult struct {
	Errors    []SnapshotErrorMessage
	Resources []string
}
