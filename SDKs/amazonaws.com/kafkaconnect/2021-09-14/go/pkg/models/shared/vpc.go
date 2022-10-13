package shared

type Vpc struct {
	SecurityGroups []string `json:"securityGroups"`
	Subnets        []string `json:"subnets"`
}
