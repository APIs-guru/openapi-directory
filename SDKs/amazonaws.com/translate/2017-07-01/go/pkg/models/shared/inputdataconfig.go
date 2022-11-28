package shared

// InputDataConfig
// The input configuration properties for requesting a batch translation job.
type InputDataConfig struct {
	ContentType string `json:"ContentType"`
	S3URI       string `json:"S3Uri"`
}
