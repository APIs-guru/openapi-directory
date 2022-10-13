package shared

type RedshiftMetadata struct {
	DatabaseUserName *string           `json:"DatabaseUserName"`
	RedshiftDatabase *RedshiftDatabase `json:"RedshiftDatabase"`
	SelectSQLQuery   *string           `json:"SelectSqlQuery"`
}
