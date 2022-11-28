package shared

// AwsEc2NetworkACLDetails
// Contains details about an EC2 network access control list (ACL).
type AwsEc2NetworkACLDetails struct {
	Associations []AwsEc2NetworkACLAssociation `json:"Associations,omitempty"`
	Entries      []AwsEc2NetworkACLEntry       `json:"Entries,omitempty"`
	IsDefault    *bool                         `json:"IsDefault,omitempty"`
	NetworkACLID *string                       `json:"NetworkAclId,omitempty"`
	OwnerID      *string                       `json:"OwnerId,omitempty"`
	VpcID        *string                       `json:"VpcId,omitempty"`
}
