package shared

type CidrBlockAssociation struct {
	AssociationID  *string `json:"AssociationId,omitempty"`
	CidrBlock      *string `json:"CidrBlock,omitempty"`
	CidrBlockState *string `json:"CidrBlockState,omitempty"`
}
