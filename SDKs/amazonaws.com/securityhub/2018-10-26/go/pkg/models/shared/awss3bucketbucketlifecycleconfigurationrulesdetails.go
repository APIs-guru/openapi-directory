package shared



type AwsS3BucketBucketLifecycleConfigurationRulesDetails struct {
    AbortIncompleteMultipartUpload *AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails `json:"AbortIncompleteMultipartUpload,omitempty"`
    ExpirationDate *string `json:"ExpirationDate,omitempty"`
    ExpirationInDays *int64 `json:"ExpirationInDays,omitempty"`
    ExpiredObjectDeleteMarker *bool `json:"ExpiredObjectDeleteMarker,omitempty"`
    Filter *AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails `json:"Filter,omitempty"`
    ID *string `json:"ID,omitempty"`
    NoncurrentVersionExpirationInDays *int64 `json:"NoncurrentVersionExpirationInDays,omitempty"`
    NoncurrentVersionTransitions []AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails `json:"NoncurrentVersionTransitions,omitempty"`
    Prefix *string `json:"Prefix,omitempty"`
    Status *string `json:"Status,omitempty"`
    Transitions []AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails `json:"Transitions,omitempty"`
    
}

