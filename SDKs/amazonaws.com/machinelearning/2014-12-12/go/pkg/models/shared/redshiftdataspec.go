package shared

type RedshiftDataSpec struct {
	DataRearrangement   *string                     `json:"DataRearrangement,omitempty"`
	DataSchema          *string                     `json:"DataSchema,omitempty"`
	DataSchemaURI       *string                     `json:"DataSchemaUri,omitempty"`
	DatabaseCredentials RedshiftDatabaseCredentials `json:"DatabaseCredentials"`
	DatabaseInformation RedshiftDatabase            `json:"DatabaseInformation"`
	S3StagingLocation   string                      `json:"S3StagingLocation"`
	SelectSQLQuery      string                      `json:"SelectSqlQuery"`
}
