package shared

// ClusterPendingModifiedValues
// This data type is used as a response element in the <code>ModifyDBCluster</code> operation and contains changes that will be applied during the next maintenance window.
type ClusterPendingModifiedValues struct {
	DbClusterIdentifier              *string
	EngineVersion                    *string
	IamDatabaseAuthenticationEnabled *bool
	MasterUserPassword               *string
	PendingCloudwatchLogsExports     *PendingCloudwatchLogsExports
}
