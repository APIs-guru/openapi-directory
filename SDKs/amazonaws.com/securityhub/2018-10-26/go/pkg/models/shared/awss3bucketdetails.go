package shared

type AwsS3BucketDetails struct {
	AccessControlList                 *string                                         `json:"AccessControlList"`
	BucketLifecycleConfiguration      *AwsS3BucketBucketLifecycleConfigurationDetails `json:"BucketLifecycleConfiguration"`
	BucketLoggingConfiguration        *AwsS3BucketLoggingConfiguration                `json:"BucketLoggingConfiguration"`
	BucketNotificationConfiguration   *AwsS3BucketNotificationConfiguration           `json:"BucketNotificationConfiguration"`
	BucketWebsiteConfiguration        *AwsS3BucketWebsiteConfiguration                `json:"BucketWebsiteConfiguration"`
	CreatedAt                         *string                                         `json:"CreatedAt"`
	OwnerID                           *string                                         `json:"OwnerId"`
	OwnerName                         *string                                         `json:"OwnerName"`
	PublicAccessBlockConfiguration    *AwsS3AccountPublicAccessBlockDetails           `json:"PublicAccessBlockConfiguration"`
	ServerSideEncryptionConfiguration *AwsS3BucketServerSideEncryptionConfiguration   `json:"ServerSideEncryptionConfiguration"`
}
