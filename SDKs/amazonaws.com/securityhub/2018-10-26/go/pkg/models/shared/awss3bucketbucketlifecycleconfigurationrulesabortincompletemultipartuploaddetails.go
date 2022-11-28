package shared

// AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails
// Information about what Amazon S3 does when a multipart upload is incomplete.
type AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails struct {
	DaysAfterInitiation *int64 `json:"DaysAfterInitiation,omitempty"`
}
