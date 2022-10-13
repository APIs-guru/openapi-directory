package shared

type OutputDataConfig struct {
	KmsKeyID     *string `json:"KmsKeyId"`
	S3OutputPath string  `json:"S3OutputPath"`
}
