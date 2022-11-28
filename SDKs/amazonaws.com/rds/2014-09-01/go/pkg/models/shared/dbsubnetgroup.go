package shared

type DbSubnetGroup struct {
	DbSubnetGroupDescription *string
	DbSubnetGroupName        *string
	SubnetGroupStatus        *string
	Subnets                  []Subnet
	VpcID                    *string
}
