package shared

// AwsS3BucketServerSideEncryptionConfiguration
// The encryption configuration for the S3 bucket.
type AwsS3BucketServerSideEncryptionConfiguration struct {
	Rules []AwsS3BucketServerSideEncryptionRule `json:"Rules,omitempty"`
}
