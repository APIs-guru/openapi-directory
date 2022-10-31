package shared

type AwsEc2NetworkACLAssociation struct {
	NetworkACLAssociationID *string `json:"NetworkAclAssociationId,omitempty"`
	NetworkACLID            *string `json:"NetworkAclId,omitempty"`
	SubnetID                *string `json:"SubnetId,omitempty"`
}
