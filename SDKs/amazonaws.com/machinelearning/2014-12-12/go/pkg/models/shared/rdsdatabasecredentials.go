package shared

// RdsDatabaseCredentials
// The database credentials to connect to a database on an RDS DB instance.
type RdsDatabaseCredentials struct {
	Password string `json:"Password"`
	Username string `json:"Username"`
}
