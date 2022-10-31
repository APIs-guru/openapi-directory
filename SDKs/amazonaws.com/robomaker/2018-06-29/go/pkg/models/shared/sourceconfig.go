package shared

type SourceConfig struct {
	Architecture *ArchitectureEnum `json:"architecture,omitempty"`
	S3Bucket     *string           `json:"s3Bucket,omitempty"`
	S3Key        *string           `json:"s3Key,omitempty"`
}
