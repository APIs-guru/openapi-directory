package shared

type ConnectionAliasAssociation struct {
	AssociatedAccountID  *string                `json:"AssociatedAccountId"`
	AssociationStatus    *AssociationStatusEnum `json:"AssociationStatus"`
	ConnectionIdentifier *string                `json:"ConnectionIdentifier"`
	ResourceID           *string                `json:"ResourceId"`
}
