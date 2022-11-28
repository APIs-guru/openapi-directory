package shared

// ConnectionAlias
// Describes a connection alias. Connection aliases are used for cross-Region redirection. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/cross-region-redirection.html"> Cross-Region Redirection for Amazon WorkSpaces</a>.
type ConnectionAlias struct {
	AliasID          *string                      `json:"AliasId,omitempty"`
	Associations     []ConnectionAliasAssociation `json:"Associations,omitempty"`
	ConnectionString *string                      `json:"ConnectionString,omitempty"`
	OwnerAccountID   *string                      `json:"OwnerAccountId,omitempty"`
	State            *ConnectionAliasStateEnum    `json:"State,omitempty"`
}
