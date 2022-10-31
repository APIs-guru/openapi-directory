package shared



type AssociateResourceShareResponse struct {
    ClientToken *string `json:"clientToken,omitempty"`
    ResourceShareAssociations []ResourceShareAssociation `json:"resourceShareAssociations,omitempty"`
    
}

