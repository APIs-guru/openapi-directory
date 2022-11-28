package shared

// PendingModifiedValues
// Describes cluster attributes that are in a pending state. A change to one or more the attributes was requested and is in progress or will be applied.
type PendingModifiedValues struct {
	AutomatedSnapshotRetentionPeriod *int64
	ClusterIdentifier                *string
	ClusterType                      *string
	ClusterVersion                   *string
	EncryptionType                   *string
	EnhancedVpcRouting               *bool
	MaintenanceTrackName             *string
	MasterUserPassword               *string
	NodeType                         *string
	NumberOfNodes                    *int64
	PubliclyAccessible               *bool
}
