package shared

// Vpc
// Information about the VPC in which the connector resides.
type Vpc struct {
	SecurityGroups []string `json:"securityGroups,omitempty"`
	Subnets        []string `json:"subnets"`
}
