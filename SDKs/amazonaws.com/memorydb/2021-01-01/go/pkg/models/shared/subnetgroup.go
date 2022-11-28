package shared

// SubnetGroup
// <p>Represents the output of one of the following operations:</p> <ul> <li> <p>CreateSubnetGroup</p> </li> <li> <p>UpdateSubnetGroup</p> </li> </ul> <p>A subnet group is a collection of subnets (typically private) that you can designate for your clusters running in an Amazon Virtual Private Cloud (VPC) environment.</p>
type SubnetGroup struct {
	Arn         *string  `json:"ARN,omitempty"`
	Description *string  `json:"Description,omitempty"`
	Name        *string  `json:"Name,omitempty"`
	Subnets     []Subnet `json:"Subnets,omitempty"`
	VpcID       *string  `json:"VpcId,omitempty"`
}
