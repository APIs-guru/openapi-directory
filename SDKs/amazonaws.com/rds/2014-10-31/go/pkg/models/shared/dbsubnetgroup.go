package shared

// DbSubnetGroup
// <p>Contains the details of an Amazon RDS DB subnet group. </p> <p>This data type is used as a response element in the <code>DescribeDBSubnetGroups</code> action. </p>
type DbSubnetGroup struct {
	DbSubnetGroupArn         *string
	DbSubnetGroupDescription *string
	DbSubnetGroupName        *string
	SubnetGroupStatus        *string
	Subnets                  []Subnet
	VpcID                    *string
}
