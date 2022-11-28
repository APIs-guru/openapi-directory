package shared

// MonitoringOutput
// The output object for a monitoring job.
type MonitoringOutput struct {
	S3Output MonitoringS3Output `json:"S3Output"`
}
