package shared

// ApplicationSnapshotConfigurationUpdate
// Describes updates to whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.
type ApplicationSnapshotConfigurationUpdate struct {
	SnapshotsEnabledUpdate bool `json:"SnapshotsEnabledUpdate"`
}
