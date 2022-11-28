package shared

// AwsS3BucketDetails
// The details of an Amazon S3 bucket.
type AwsS3BucketDetails struct {
	AccessControlList                 *string                                         `json:"AccessControlList,omitempty"`
	BucketLifecycleConfiguration      *AwsS3BucketBucketLifecycleConfigurationDetails `json:"BucketLifecycleConfiguration,omitempty"`
	BucketLoggingConfiguration        *AwsS3BucketLoggingConfiguration                `json:"BucketLoggingConfiguration,omitempty"`
	BucketNotificationConfiguration   *AwsS3BucketNotificationConfiguration           `json:"BucketNotificationConfiguration,omitempty"`
	BucketWebsiteConfiguration        *AwsS3BucketWebsiteConfiguration                `json:"BucketWebsiteConfiguration,omitempty"`
	CreatedAt                         *string                                         `json:"CreatedAt,omitempty"`
	OwnerID                           *string                                         `json:"OwnerId,omitempty"`
	OwnerName                         *string                                         `json:"OwnerName,omitempty"`
	PublicAccessBlockConfiguration    *AwsS3AccountPublicAccessBlockDetails           `json:"PublicAccessBlockConfiguration,omitempty"`
	ServerSideEncryptionConfiguration *AwsS3BucketServerSideEncryptionConfiguration   `json:"ServerSideEncryptionConfiguration,omitempty"`
}
