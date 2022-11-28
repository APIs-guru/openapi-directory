package shared

// AwsS3BucketBucketLifecycleConfigurationDetails
// The lifecycle configuration for the objects in the S3 bucket.
type AwsS3BucketBucketLifecycleConfigurationDetails struct {
	Rules []AwsS3BucketBucketLifecycleConfigurationRulesDetails `json:"Rules,omitempty"`
}
