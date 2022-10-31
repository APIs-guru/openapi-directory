package shared



type ExecuteStatementInput struct {
    ClusterIdentifier string `json:"ClusterIdentifier"`
    Database string `json:"Database"`
    DbUser *string `json:"DbUser,omitempty"`
    Parameters []SQLParameter `json:"Parameters,omitempty"`
    SecretArn *string `json:"SecretArn,omitempty"`
    SQL string `json:"Sql"`
    StatementName *string `json:"StatementName,omitempty"`
    WithEvent *bool `json:"WithEvent,omitempty"`
    
}

