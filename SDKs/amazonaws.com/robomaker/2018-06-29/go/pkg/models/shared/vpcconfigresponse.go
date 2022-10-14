package shared

type VpcConfigResponse struct {
	AssignPublicIP *bool    `json:"assignPublicIp,omitempty"`
	SecurityGroups []string `json:"securityGroups,omitempty"`
	Subnets        []string `json:"subnets,omitempty"`
	VpcID          *string  `json:"vpcId,omitempty"`
}
