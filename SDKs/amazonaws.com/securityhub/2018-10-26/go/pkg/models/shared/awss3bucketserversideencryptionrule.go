package shared

// AwsS3BucketServerSideEncryptionRule
// An encryption rule to apply to the S3 bucket.
type AwsS3BucketServerSideEncryptionRule struct {
	ApplyServerSideEncryptionByDefault *AwsS3BucketServerSideEncryptionByDefault `json:"ApplyServerSideEncryptionByDefault,omitempty"`
}
