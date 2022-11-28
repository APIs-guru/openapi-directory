package shared

// ProcessingResources
// Identifies the resources, ML compute instances, and ML storage volumes to deploy for a processing job. In distributed training, you specify more than one instance.
type ProcessingResources struct {
	ClusterConfig ProcessingClusterConfig `json:"ClusterConfig"`
}
