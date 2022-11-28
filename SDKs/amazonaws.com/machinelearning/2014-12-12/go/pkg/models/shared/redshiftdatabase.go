package shared

// RedshiftDatabase
// Describes the database details required to connect to an Amazon Redshift database.
type RedshiftDatabase struct {
	ClusterIdentifier string `json:"ClusterIdentifier"`
	DatabaseName      string `json:"DatabaseName"`
}
