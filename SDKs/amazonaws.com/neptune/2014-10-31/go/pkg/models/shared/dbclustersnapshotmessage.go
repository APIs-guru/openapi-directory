package shared

type DbClusterSnapshotMessage struct {
	DbClusterSnapshots []DbClusterSnapshot
	Marker             *string
}
