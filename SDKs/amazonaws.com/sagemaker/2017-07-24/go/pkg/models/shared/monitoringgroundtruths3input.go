package shared

// MonitoringGroundTruthS3Input
// The ground truth labels for the dataset used for the monitoring job.
type MonitoringGroundTruthS3Input struct {
	S3URI *string `json:"S3Uri,omitempty"`
}
