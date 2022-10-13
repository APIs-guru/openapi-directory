package shared

type SourceConfig struct {
	Architecture *ArchitectureEnum `json:"architecture"`
	S3Bucket     *string           `json:"s3Bucket"`
	S3Key        *string           `json:"s3Key"`
}
