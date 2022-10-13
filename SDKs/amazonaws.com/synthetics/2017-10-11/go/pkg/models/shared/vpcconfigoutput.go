package shared

type VpcConfigOutput struct {
	SecurityGroupIds []string `json:"SecurityGroupIds"`
	SubnetIds        []string `json:"SubnetIds"`
	VpcID            *string  `json:"VpcId"`
}
