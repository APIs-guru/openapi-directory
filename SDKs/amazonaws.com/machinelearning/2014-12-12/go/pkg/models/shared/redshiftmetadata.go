package shared



type RedshiftMetadata struct {
    DatabaseUserName *string `json:"DatabaseUserName,omitempty"`
    RedshiftDatabase *RedshiftDatabase `json:"RedshiftDatabase,omitempty"`
    SelectSQLQuery *string `json:"SelectSqlQuery,omitempty"`
    
}

