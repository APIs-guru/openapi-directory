package shared

type RedshiftDataSpec struct {
	DataRearrangement   *string                     `json:"DataRearrangement"`
	DataSchema          *string                     `json:"DataSchema"`
	DataSchemaURI       *string                     `json:"DataSchemaUri"`
	DatabaseCredentials RedshiftDatabaseCredentials `json:"DatabaseCredentials"`
	DatabaseInformation RedshiftDatabase            `json:"DatabaseInformation"`
	S3StagingLocation   string                      `json:"S3StagingLocation"`
	SelectSQLQuery      string                      `json:"SelectSqlQuery"`
}
