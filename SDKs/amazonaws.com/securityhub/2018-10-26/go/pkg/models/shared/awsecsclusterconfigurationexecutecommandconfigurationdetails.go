package shared

type AwsEcsClusterConfigurationExecuteCommandConfigurationDetails struct {
	KmsKeyID         *string                                                                       `json:"KmsKeyId"`
	LogConfiguration *AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails `json:"LogConfiguration"`
	Logging          *string                                                                       `json:"Logging"`
}
