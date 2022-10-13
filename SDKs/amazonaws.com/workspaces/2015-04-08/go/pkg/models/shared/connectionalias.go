package shared

type ConnectionAlias struct {
	AliasID          *string                      `json:"AliasId"`
	Associations     []ConnectionAliasAssociation `json:"Associations"`
	ConnectionString *string                      `json:"ConnectionString"`
	OwnerAccountID   *string                      `json:"OwnerAccountId"`
	State            *ConnectionAliasStateEnum    `json:"State"`
}
