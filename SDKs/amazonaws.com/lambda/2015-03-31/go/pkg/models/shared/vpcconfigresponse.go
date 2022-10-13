package shared

type VpcConfigResponse struct {
	SecurityGroupIds []string `json:"SecurityGroupIds"`
	SubnetIds        []string `json:"SubnetIds"`
	VpcID            *string  `json:"VpcId"`
}
