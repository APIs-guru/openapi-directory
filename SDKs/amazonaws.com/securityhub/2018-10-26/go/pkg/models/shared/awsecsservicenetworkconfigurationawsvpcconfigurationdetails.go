package shared



type AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails struct {
    AssignPublicIP *string `json:"AssignPublicIp,omitempty"`
    SecurityGroups []string `json:"SecurityGroups,omitempty"`
    Subnets []string `json:"Subnets,omitempty"`
    
}

