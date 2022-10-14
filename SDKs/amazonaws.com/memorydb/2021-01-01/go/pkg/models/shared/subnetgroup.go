package shared

type SubnetGroup struct {
	Arn         *string  `json:"ARN,omitempty"`
	Description *string  `json:"Description,omitempty"`
	Name        *string  `json:"Name,omitempty"`
	Subnets     []Subnet `json:"Subnets,omitempty"`
	VpcID       *string  `json:"VpcId,omitempty"`
}
