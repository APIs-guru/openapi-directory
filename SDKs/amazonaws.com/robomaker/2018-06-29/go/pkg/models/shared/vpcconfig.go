package shared

type VpcConfig struct {
	AssignPublicIP *bool    `json:"assignPublicIp"`
	SecurityGroups []string `json:"securityGroups"`
	Subnets        []string `json:"subnets"`
}
