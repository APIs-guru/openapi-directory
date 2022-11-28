package shared

// DbSubnetGroup
// <p>Contains the details of an Amazon Neptune DB subnet group.</p> <p>This data type is used as a response element in the <a>DescribeDBSubnetGroups</a> action.</p>
type DbSubnetGroup struct {
	DbSubnetGroupArn         *string
	DbSubnetGroupDescription *string
	DbSubnetGroupName        *string
	SubnetGroupStatus        *string
	Subnets                  []Subnet
	VpcID                    *string
}
