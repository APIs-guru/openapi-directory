package shared

// ConnectionCredential
// Credential to use with a connection.
type ConnectionCredential struct {
	CloudSQL *CloudSQLCredential `json:"cloudSql,omitempty"`
}
