package shared

type AwsRdsDbSubnetGroup struct {
	DbSubnetGroupArn         *string                     `json:"DbSubnetGroupArn,omitempty"`
	DbSubnetGroupDescription *string                     `json:"DbSubnetGroupDescription,omitempty"`
	DbSubnetGroupName        *string                     `json:"DbSubnetGroupName,omitempty"`
	SubnetGroupStatus        *string                     `json:"SubnetGroupStatus,omitempty"`
	Subnets                  []AwsRdsDbSubnetGroupSubnet `json:"Subnets,omitempty"`
	VpcID                    *string                     `json:"VpcId,omitempty"`
}
