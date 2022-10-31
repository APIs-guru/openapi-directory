package shared



type DisassociateResourceShareResponse struct {
    ClientToken *string `json:"clientToken,omitempty"`
    ResourceShareAssociations []ResourceShareAssociation `json:"resourceShareAssociations,omitempty"`
    
}

