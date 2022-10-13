package shared

type AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails struct {
	AssignPublicIP *string  `json:"AssignPublicIp"`
	SecurityGroups []string `json:"SecurityGroups"`
	Subnets        []string `json:"Subnets"`
}
