package shared

type AwsEc2NetworkACLDetails struct {
	Associations []AwsEc2NetworkACLAssociation `json:"Associations"`
	Entries      []AwsEc2NetworkACLEntry       `json:"Entries"`
	IsDefault    *bool                         `json:"IsDefault"`
	NetworkACLID *string                       `json:"NetworkAclId"`
	OwnerID      *string                       `json:"OwnerId"`
	VpcID        *string                       `json:"VpcId"`
}
