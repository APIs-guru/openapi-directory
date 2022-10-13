package shared

type AudioLogDestination struct {
	S3Bucket S3BucketLogDestination `json:"s3Bucket"`
}
