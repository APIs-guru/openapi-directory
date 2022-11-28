package shared

// ClusterSecurityGroup
// Describes a security group.
type ClusterSecurityGroup struct {
	ClusterSecurityGroupName *string
	Description              *string
	Ec2SecurityGroups        []Ec2SecurityGroup
	IPRanges                 []IPRange
	Tags                     []Tag
}
