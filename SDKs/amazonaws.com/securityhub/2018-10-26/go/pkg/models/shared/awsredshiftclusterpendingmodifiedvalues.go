package shared

type AwsRedshiftClusterPendingModifiedValues struct {
	AutomatedSnapshotRetentionPeriod *int64  `json:"AutomatedSnapshotRetentionPeriod"`
	ClusterIdentifier                *string `json:"ClusterIdentifier"`
	ClusterType                      *string `json:"ClusterType"`
	ClusterVersion                   *string `json:"ClusterVersion"`
	EncryptionType                   *string `json:"EncryptionType"`
	EnhancedVpcRouting               *bool   `json:"EnhancedVpcRouting"`
	MaintenanceTrackName             *string `json:"MaintenanceTrackName"`
	MasterUserPassword               *string `json:"MasterUserPassword"`
	NodeType                         *string `json:"NodeType"`
	NumberOfNodes                    *int64  `json:"NumberOfNodes"`
	PubliclyAccessible               *bool   `json:"PubliclyAccessible"`
}
