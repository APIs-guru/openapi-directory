package shared

// AwsEcsClusterConfigurationExecuteCommandConfigurationDetails
// Contains the run command configuration for the cluster.
type AwsEcsClusterConfigurationExecuteCommandConfigurationDetails struct {
	KmsKeyID         *string                                                                       `json:"KmsKeyId,omitempty"`
	LogConfiguration *AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails `json:"LogConfiguration,omitempty"`
	Logging          *string                                                                       `json:"Logging,omitempty"`
}
