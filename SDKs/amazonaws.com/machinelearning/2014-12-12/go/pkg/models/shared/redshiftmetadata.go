package shared

// RedshiftMetadata
// Describes the <code>DataSource</code> details specific to Amazon Redshift.
type RedshiftMetadata struct {
	DatabaseUserName *string           `json:"DatabaseUserName,omitempty"`
	RedshiftDatabase *RedshiftDatabase `json:"RedshiftDatabase,omitempty"`
	SelectSQLQuery   *string           `json:"SelectSqlQuery,omitempty"`
}
