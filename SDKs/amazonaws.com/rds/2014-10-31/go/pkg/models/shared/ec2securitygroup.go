package shared

// Ec2SecurityGroup
// <p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>AuthorizeDBSecurityGroupIngress</code> </p> </li> <li> <p> <code>DescribeDBSecurityGroups</code> </p> </li> <li> <p> <code>RevokeDBSecurityGroupIngress</code> </p> </li> </ul>
type Ec2SecurityGroup struct {
	Ec2SecurityGroupID      *string
	Ec2SecurityGroupName    *string
	Ec2SecurityGroupOwnerID *string
	Status                  *string
}
