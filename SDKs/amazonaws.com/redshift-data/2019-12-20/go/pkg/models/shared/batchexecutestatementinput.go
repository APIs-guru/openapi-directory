package shared

type BatchExecuteStatementInput struct {
	ClusterIdentifier string   `json:"ClusterIdentifier"`
	Database          string   `json:"Database"`
	DbUser            *string  `json:"DbUser"`
	SecretArn         *string  `json:"SecretArn"`
	Sqls              []string `json:"Sqls"`
	StatementName     *string  `json:"StatementName"`
	WithEvent         *bool    `json:"WithEvent"`
}
