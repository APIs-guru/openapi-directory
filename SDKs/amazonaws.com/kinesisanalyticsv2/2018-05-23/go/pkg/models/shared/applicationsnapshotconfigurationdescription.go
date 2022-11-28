package shared

// ApplicationSnapshotConfigurationDescription
// Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.
type ApplicationSnapshotConfigurationDescription struct {
	SnapshotsEnabled bool `json:"SnapshotsEnabled"`
}
