package shared

// VpcDescription
// The description of the VPC in which the connector resides.
type VpcDescription struct {
	SecurityGroups []string `json:"securityGroups,omitempty"`
	Subnets        []string `json:"subnets,omitempty"`
}
