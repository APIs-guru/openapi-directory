package shared

type AwsEc2NetworkACLAssociation struct {
	NetworkACLAssociationID *string `json:"NetworkAclAssociationId"`
	NetworkACLID            *string `json:"NetworkAclId"`
	SubnetID                *string `json:"SubnetId"`
}
