package shared

type CloudSQLPropertiesTypeEnum string

const (
	CloudSQLPropertiesTypeEnumDatabaseTypeUnspecified CloudSQLPropertiesTypeEnum = "DATABASE_TYPE_UNSPECIFIED"
	CloudSQLPropertiesTypeEnumPostgres                CloudSQLPropertiesTypeEnum = "POSTGRES"
	CloudSQLPropertiesTypeEnumMysql                   CloudSQLPropertiesTypeEnum = "MYSQL"
)

type CloudSQLProperties struct {
	Credential       *CloudSQLCredential         `json:"credential"`
	Database         *string                     `json:"database"`
	InstanceID       *string                     `json:"instanceId"`
	ServiceAccountID *string                     `json:"serviceAccountId"`
	Type             *CloudSQLPropertiesTypeEnum `json:"type"`
}
