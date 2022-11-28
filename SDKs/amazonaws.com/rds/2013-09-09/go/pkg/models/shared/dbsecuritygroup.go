package shared

type DbSecurityGroup struct {
	DbSecurityGroupDescription *string
	DbSecurityGroupName        *string
	Ec2SecurityGroups          []Ec2SecurityGroup
	IPRanges                   []IPRange
	OwnerID                    *string
	VpcID                      *string
}
