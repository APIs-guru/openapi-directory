package shared

// RedshiftDatabaseCredentials
// Describes the database credentials for connecting to a database on an Amazon Redshift cluster.
type RedshiftDatabaseCredentials struct {
	Password string `json:"Password"`
	Username string `json:"Username"`
}
