package shared

type Ipv6CidrBlockAssociation struct {
	AssociationID  *string `json:"AssociationId,omitempty"`
	CidrBlockState *string `json:"CidrBlockState,omitempty"`
	Ipv6CidrBlock  *string `json:"Ipv6CidrBlock,omitempty"`
}
