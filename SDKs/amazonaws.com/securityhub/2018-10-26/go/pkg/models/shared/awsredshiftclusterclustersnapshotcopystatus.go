package shared

type AwsRedshiftClusterClusterSnapshotCopyStatus struct {
	DestinationRegion             *string `json:"DestinationRegion"`
	ManualSnapshotRetentionPeriod *int64  `json:"ManualSnapshotRetentionPeriod"`
	RetentionPeriod               *int64  `json:"RetentionPeriod"`
	SnapshotCopyGrantName         *string `json:"SnapshotCopyGrantName"`
}
