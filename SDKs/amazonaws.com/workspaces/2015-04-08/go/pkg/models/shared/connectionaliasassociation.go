package shared

// ConnectionAliasAssociation
// Describes a connection alias association that is used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.
type ConnectionAliasAssociation struct {
	AssociatedAccountID  *string                `json:"AssociatedAccountId,omitempty"`
	AssociationStatus    *AssociationStatusEnum `json:"AssociationStatus,omitempty"`
	ConnectionIdentifier *string                `json:"ConnectionIdentifier,omitempty"`
	ResourceID           *string                `json:"ResourceId,omitempty"`
}
