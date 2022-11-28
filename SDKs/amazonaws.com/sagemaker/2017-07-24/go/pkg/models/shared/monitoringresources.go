package shared

// MonitoringResources
// Identifies the resources to deploy for a monitoring job.
type MonitoringResources struct {
	ClusterConfig MonitoringClusterConfig `json:"ClusterConfig"`
}
