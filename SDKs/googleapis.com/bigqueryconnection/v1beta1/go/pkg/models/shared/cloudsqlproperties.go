package shared




type CloudSQLPropertiesTypeEnum string

const (
    CloudSQLPropertiesTypeEnumDatabaseTypeUnspecified CloudSQLPropertiesTypeEnum = "DATABASE_TYPE_UNSPECIFIED"
CloudSQLPropertiesTypeEnumPostgres CloudSQLPropertiesTypeEnum = "POSTGRES"
CloudSQLPropertiesTypeEnumMysql CloudSQLPropertiesTypeEnum = "MYSQL"
)


type CloudSQLProperties struct {
    Credential *CloudSQLCredential `json:"credential,omitempty"`
    Database *string `json:"database,omitempty"`
    InstanceID *string `json:"instanceId,omitempty"`
    ServiceAccountID *string `json:"serviceAccountId,omitempty"`
    Type *CloudSQLPropertiesTypeEnum `json:"type,omitempty"`
    
}

