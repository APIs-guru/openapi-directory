package shared

// Ec2SecurityGroup
// Describes an Amazon EC2 security group.
type Ec2SecurityGroup struct {
	Ec2SecurityGroupName    *string
	Ec2SecurityGroupOwnerID *string
	Status                  *string
	Tags                    []Tag
}
