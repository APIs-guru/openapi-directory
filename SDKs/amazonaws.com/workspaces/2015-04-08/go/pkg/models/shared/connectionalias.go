package shared



type ConnectionAlias struct {
    AliasID *string `json:"AliasId,omitempty"`
    Associations []ConnectionAliasAssociation `json:"Associations,omitempty"`
    ConnectionString *string `json:"ConnectionString,omitempty"`
    OwnerAccountID *string `json:"OwnerAccountId,omitempty"`
    State *ConnectionAliasStateEnum `json:"State,omitempty"`
    
}

