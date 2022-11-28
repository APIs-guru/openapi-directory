package shared

// OutputConfig
// The S3 bucket and folder location where training output is placed.
type OutputConfig struct {
	S3Bucket    *string `json:"S3Bucket,omitempty"`
	S3KeyPrefix *string `json:"S3KeyPrefix,omitempty"`
}
