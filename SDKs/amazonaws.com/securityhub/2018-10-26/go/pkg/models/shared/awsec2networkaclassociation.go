package shared

// AwsEc2NetworkACLAssociation
// An association between the network ACL and a subnet.
type AwsEc2NetworkACLAssociation struct {
	NetworkACLAssociationID *string `json:"NetworkAclAssociationId,omitempty"`
	NetworkACLID            *string `json:"NetworkAclId,omitempty"`
	SubnetID                *string `json:"SubnetId,omitempty"`
}
