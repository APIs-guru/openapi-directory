package shared

type NeoVpcConfig struct {
	SecurityGroupIds []string `json:"SecurityGroupIds"`
	Subnets          []string `json:"Subnets"`
}
