package shared

type AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails struct {
	CloudWatchEncryptionEnabled *bool   `json:"CloudWatchEncryptionEnabled,omitempty"`
	CloudWatchLogGroupName      *string `json:"CloudWatchLogGroupName,omitempty"`
	S3BucketName                *string `json:"S3BucketName,omitempty"`
	S3EncryptionEnabled         *bool   `json:"S3EncryptionEnabled,omitempty"`
	S3KeyPrefix                 *string `json:"S3KeyPrefix,omitempty"`
}
