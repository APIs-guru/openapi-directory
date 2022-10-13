package shared

type DescribeCompanyNetworkConfigurationResponse struct {
	SecurityGroupIds []string `json:"SecurityGroupIds"`
	SubnetIds        []string `json:"SubnetIds"`
	VpcID            *string  `json:"VpcId"`
}
