package shared

// AutoMlOutputDataConfig
// The output data configuration.
type AutoMlOutputDataConfig struct {
	KmsKeyID     *string `json:"KmsKeyId,omitempty"`
	S3OutputPath string  `json:"S3OutputPath"`
}
