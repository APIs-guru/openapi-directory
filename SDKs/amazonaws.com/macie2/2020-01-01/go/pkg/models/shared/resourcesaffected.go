package shared

// ResourcesAffected
// Provides information about the resources that a finding applies to.
type ResourcesAffected struct {
	S3Bucket *S3Bucket `json:"s3Bucket,omitempty"`
	S3Object *S3Object `json:"s3Object,omitempty"`
}
