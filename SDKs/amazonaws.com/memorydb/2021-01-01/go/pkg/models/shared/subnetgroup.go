package shared

type SubnetGroup struct {
	Arn         *string  `json:"ARN"`
	Description *string  `json:"Description"`
	Name        *string  `json:"Name"`
	Subnets     []Subnet `json:"Subnets"`
	VpcID       *string  `json:"VpcId"`
}
