package shared

type DisassociateResourceShareResponse struct {
	ClientToken               *string                    `json:"clientToken"`
	ResourceShareAssociations []ResourceShareAssociation `json:"resourceShareAssociations"`
}
