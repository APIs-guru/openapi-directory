package shared

type DbSnapshotMessage struct {
	DbSnapshots []DbSnapshot
	Marker      *string
}
