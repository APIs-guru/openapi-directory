package shared

// S3DataConfig
// The configuration details of an Amazon S3 input or output bucket.
type S3DataConfig struct {
	KmsKeyArn *string `json:"kmsKeyArn,omitempty"`
	Path      string  `json:"path"`
}
