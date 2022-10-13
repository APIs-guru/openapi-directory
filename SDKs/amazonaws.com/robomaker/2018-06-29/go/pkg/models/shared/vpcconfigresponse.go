package shared

type VpcConfigResponse struct {
	AssignPublicIP *bool    `json:"assignPublicIp"`
	SecurityGroups []string `json:"securityGroups"`
	Subnets        []string `json:"subnets"`
	VpcID          *string  `json:"vpcId"`
}
