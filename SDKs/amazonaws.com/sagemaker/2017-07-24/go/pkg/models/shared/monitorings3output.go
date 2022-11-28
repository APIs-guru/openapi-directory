package shared

// MonitoringS3Output
// Information about where and how you want to store the results of a monitoring job.
type MonitoringS3Output struct {
	LocalPath    string                      `json:"LocalPath"`
	S3UploadMode *ProcessingS3UploadModeEnum `json:"S3UploadMode,omitempty"`
	S3URI        string                      `json:"S3Uri"`
}
