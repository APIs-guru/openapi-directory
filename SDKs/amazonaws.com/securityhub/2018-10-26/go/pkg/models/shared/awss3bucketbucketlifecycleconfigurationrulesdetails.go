package shared

type AwsS3BucketBucketLifecycleConfigurationRulesDetails struct {
	AbortIncompleteMultipartUpload    *AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails `json:"AbortIncompleteMultipartUpload"`
	ExpirationDate                    *string                                                                            `json:"ExpirationDate"`
	ExpirationInDays                  *int64                                                                             `json:"ExpirationInDays"`
	ExpiredObjectDeleteMarker         *bool                                                                              `json:"ExpiredObjectDeleteMarker"`
	Filter                            *AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails                         `json:"Filter"`
	ID                                *string                                                                            `json:"ID"`
	NoncurrentVersionExpirationInDays *int64                                                                             `json:"NoncurrentVersionExpirationInDays"`
	NoncurrentVersionTransitions      []AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails  `json:"NoncurrentVersionTransitions"`
	Prefix                            *string                                                                            `json:"Prefix"`
	Status                            *string                                                                            `json:"Status"`
	Transitions                       []AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails                   `json:"Transitions"`
}
