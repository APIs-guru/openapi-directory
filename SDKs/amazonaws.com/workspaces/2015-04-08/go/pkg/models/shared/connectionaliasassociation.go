package shared



type ConnectionAliasAssociation struct {
    AssociatedAccountID *string `json:"AssociatedAccountId,omitempty"`
    AssociationStatus *AssociationStatusEnum `json:"AssociationStatus,omitempty"`
    ConnectionIdentifier *string `json:"ConnectionIdentifier,omitempty"`
    ResourceID *string `json:"ResourceId,omitempty"`
    
}

