package shared

// ApplicationSnapshotConfiguration
// Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.
type ApplicationSnapshotConfiguration struct {
	SnapshotsEnabled bool `json:"SnapshotsEnabled"`
}
