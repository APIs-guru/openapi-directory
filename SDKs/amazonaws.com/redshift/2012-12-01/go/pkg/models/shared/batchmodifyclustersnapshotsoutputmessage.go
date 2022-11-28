package shared

type BatchModifyClusterSnapshotsOutputMessage struct {
	Errors    []SnapshotErrorMessage
	Resources []string
}
