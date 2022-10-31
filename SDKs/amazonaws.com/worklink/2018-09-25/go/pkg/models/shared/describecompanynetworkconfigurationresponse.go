package shared

type DescribeCompanyNetworkConfigurationResponse struct {
	SecurityGroupIds []string `json:"SecurityGroupIds,omitempty"`
	SubnetIds        []string `json:"SubnetIds,omitempty"`
	VpcID            *string  `json:"VpcId,omitempty"`
}
