package shared

type AutoMlOutputDataConfig struct {
	KmsKeyID     *string `json:"KmsKeyId,omitempty"`
	S3OutputPath string  `json:"S3OutputPath"`
}
