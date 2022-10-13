package shared

type OutputConfig struct {
	S3Bucket    *string `json:"S3Bucket"`
	S3KeyPrefix *string `json:"S3KeyPrefix"`
}
