package shared

type VpcDescription struct {
	SecurityGroups []string `json:"securityGroups"`
	Subnets        []string `json:"subnets"`
}
