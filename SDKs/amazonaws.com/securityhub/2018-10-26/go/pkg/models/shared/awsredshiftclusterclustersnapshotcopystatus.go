package shared

// AwsRedshiftClusterClusterSnapshotCopyStatus
// Information about a cross-Region snapshot copy.
type AwsRedshiftClusterClusterSnapshotCopyStatus struct {
	DestinationRegion             *string `json:"DestinationRegion,omitempty"`
	ManualSnapshotRetentionPeriod *int64  `json:"ManualSnapshotRetentionPeriod,omitempty"`
	RetentionPeriod               *int64  `json:"RetentionPeriod,omitempty"`
	SnapshotCopyGrantName         *string `json:"SnapshotCopyGrantName,omitempty"`
}
