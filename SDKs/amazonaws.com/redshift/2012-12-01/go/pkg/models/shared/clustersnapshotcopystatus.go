package shared

// ClusterSnapshotCopyStatus
// Returns the destination region and retention period that are configured for cross-region snapshot copy.
type ClusterSnapshotCopyStatus struct {
	DestinationRegion             *string
	ManualSnapshotRetentionPeriod *int64
	RetentionPeriod               *int64
	SnapshotCopyGrantName         *string
}
