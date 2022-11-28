package shared

// DbSecurityGroupMembership
// Specifies membership in a designated DB security group.
type DbSecurityGroupMembership struct {
	DbSecurityGroupName *string
	Status              *string
}
