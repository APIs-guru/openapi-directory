package shared

type AssociateResourceShareResponse struct {
	ClientToken               *string                    `json:"clientToken"`
	ResourceShareAssociations []ResourceShareAssociation `json:"resourceShareAssociations"`
}
