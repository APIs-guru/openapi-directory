package shared

// OutputDataConfig
// Provides information about how to store model training results (model artifacts).
type OutputDataConfig struct {
	KmsKeyID     *string `json:"KmsKeyId,omitempty"`
	S3OutputPath string  `json:"S3OutputPath"`
}
