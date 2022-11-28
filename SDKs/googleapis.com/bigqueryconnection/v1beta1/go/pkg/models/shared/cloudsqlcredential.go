package shared

// CloudSQLCredential
// Credential info for the Cloud SQL.
type CloudSQLCredential struct {
	Password *string `json:"password,omitempty"`
	Username *string `json:"username,omitempty"`
}
