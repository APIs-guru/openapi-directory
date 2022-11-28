package shared

// AwsEcsClusterConfigurationDetails
// The run command configuration for the cluster.
type AwsEcsClusterConfigurationDetails struct {
	ExecuteCommandConfiguration *AwsEcsClusterConfigurationExecuteCommandConfigurationDetails `json:"ExecuteCommandConfiguration,omitempty"`
}
