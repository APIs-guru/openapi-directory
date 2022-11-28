package shared

// AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails
// For tasks that use the <code>awsvpc</code> networking mode, the VPC subnet and security group configuration.
type AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails struct {
	AssignPublicIP *string  `json:"AssignPublicIp,omitempty"`
	SecurityGroups []string `json:"SecurityGroups,omitempty"`
	Subnets        []string `json:"Subnets,omitempty"`
}
