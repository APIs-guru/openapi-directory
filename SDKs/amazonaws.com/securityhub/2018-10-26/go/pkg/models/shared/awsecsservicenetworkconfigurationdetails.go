package shared

// AwsEcsServiceNetworkConfigurationDetails
// For tasks that use the <code>awsvpc</code> networking mode, the VPC subnet and security group configuration.
type AwsEcsServiceNetworkConfigurationDetails struct {
	AwsVpcConfiguration *AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails `json:"AwsVpcConfiguration,omitempty"`
}
