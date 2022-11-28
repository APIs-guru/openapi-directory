package shared

// DbSecurityGroup
// <p>Contains the details for an Amazon RDS DB security group. </p> <p>This data type is used as a response element in the <code>DescribeDBSecurityGroups</code> action. </p>
type DbSecurityGroup struct {
	DbSecurityGroupArn         *string
	DbSecurityGroupDescription *string
	DbSecurityGroupName        *string
	Ec2SecurityGroups          []Ec2SecurityGroup
	IPRanges                   []IPRange
	OwnerID                    *string
	VpcID                      *string
}
