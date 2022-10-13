package shared

type AwsRdsDbSubnetGroup struct {
	DbSubnetGroupArn         *string                     `json:"DbSubnetGroupArn"`
	DbSubnetGroupDescription *string                     `json:"DbSubnetGroupDescription"`
	DbSubnetGroupName        *string                     `json:"DbSubnetGroupName"`
	SubnetGroupStatus        *string                     `json:"SubnetGroupStatus"`
	Subnets                  []AwsRdsDbSubnetGroupSubnet `json:"Subnets"`
	VpcID                    *string                     `json:"VpcId"`
}
