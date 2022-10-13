package shared

type CidrBlockAssociation struct {
	AssociationID  *string `json:"AssociationId"`
	CidrBlock      *string `json:"CidrBlock"`
	CidrBlockState *string `json:"CidrBlockState"`
}
