package shared

type Source struct {
	Architecture *ArchitectureEnum `json:"architecture"`
	Etag         *string           `json:"etag"`
	S3Bucket     *string           `json:"s3Bucket"`
	S3Key        *string           `json:"s3Key"`
}
