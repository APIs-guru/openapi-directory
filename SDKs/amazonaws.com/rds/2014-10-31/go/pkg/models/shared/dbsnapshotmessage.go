package shared

// DbSnapshotMessage
//
//	Contains the result of a successful invocation of the <code>DescribeDBSnapshots</code> action.
type DbSnapshotMessage struct {
	DbSnapshots []DbSnapshot
	Marker      *string
}
