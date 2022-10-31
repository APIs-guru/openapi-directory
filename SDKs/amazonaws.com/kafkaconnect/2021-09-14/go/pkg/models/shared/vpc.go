package shared

type Vpc struct {
	SecurityGroups []string `json:"securityGroups,omitempty"`
	Subnets        []string `json:"subnets"`
}
