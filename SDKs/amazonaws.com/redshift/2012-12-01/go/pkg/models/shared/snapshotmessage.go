package shared

// SnapshotMessage
// Contains the output from the <a>DescribeClusterSnapshots</a> action.
type SnapshotMessage struct {
	Marker    *string
	Snapshots []Snapshot
}
