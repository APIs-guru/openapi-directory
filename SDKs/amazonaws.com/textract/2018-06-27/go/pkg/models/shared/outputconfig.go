package shared

type OutputConfig struct {
	S3Bucket string  `json:"S3Bucket"`
	S3Prefix *string `json:"S3Prefix"`
}
