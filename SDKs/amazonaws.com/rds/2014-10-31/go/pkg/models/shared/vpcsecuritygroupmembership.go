package shared

// VpcSecurityGroupMembership
// This data type is used as a response element for queries on VPC security group membership.
type VpcSecurityGroupMembership struct {
	Status             *string
	VpcSecurityGroupID *string
}
