package shared

type ExecuteStatementInput struct {
	ClusterIdentifier string         `json:"ClusterIdentifier"`
	Database          string         `json:"Database"`
	DbUser            *string        `json:"DbUser"`
	Parameters        []SQLParameter `json:"Parameters"`
	SecretArn         *string        `json:"SecretArn"`
	SQL               string         `json:"Sql"`
	StatementName     *string        `json:"StatementName"`
	WithEvent         *bool          `json:"WithEvent"`
}
