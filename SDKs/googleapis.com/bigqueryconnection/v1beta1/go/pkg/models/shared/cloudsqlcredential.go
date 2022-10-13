package shared

type CloudSQLCredential struct {
	Password *string `json:"password"`
	Username *string `json:"username"`
}
