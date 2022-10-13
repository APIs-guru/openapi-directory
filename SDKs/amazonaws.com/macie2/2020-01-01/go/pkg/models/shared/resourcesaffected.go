package shared

type ResourcesAffected struct {
	S3Bucket *S3Bucket `json:"s3Bucket"`
	S3Object *S3Object `json:"s3Object"`
}
