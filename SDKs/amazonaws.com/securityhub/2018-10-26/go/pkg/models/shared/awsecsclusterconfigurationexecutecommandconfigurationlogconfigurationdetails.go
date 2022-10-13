package shared

type AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails struct {
	CloudWatchEncryptionEnabled *bool   `json:"CloudWatchEncryptionEnabled"`
	CloudWatchLogGroupName      *string `json:"CloudWatchLogGroupName"`
	S3BucketName                *string `json:"S3BucketName"`
	S3EncryptionEnabled         *bool   `json:"S3EncryptionEnabled"`
	S3KeyPrefix                 *string `json:"S3KeyPrefix"`
}
