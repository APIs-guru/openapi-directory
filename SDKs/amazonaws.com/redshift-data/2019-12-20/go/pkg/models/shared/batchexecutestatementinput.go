package shared



type BatchExecuteStatementInput struct {
    ClusterIdentifier string `json:"ClusterIdentifier"`
    Database string `json:"Database"`
    DbUser *string `json:"DbUser,omitempty"`
    SecretArn *string `json:"SecretArn,omitempty"`
    Sqls []string `json:"Sqls"`
    StatementName *string `json:"StatementName,omitempty"`
    WithEvent *bool `json:"WithEvent,omitempty"`
    
}

