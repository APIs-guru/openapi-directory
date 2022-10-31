package shared



type RdsMetadata struct {
    DataPipelineID *string `json:"DataPipelineId,omitempty"`
    Database *RdsDatabase `json:"Database,omitempty"`
    DatabaseUserName *string `json:"DatabaseUserName,omitempty"`
    ResourceRole *string `json:"ResourceRole,omitempty"`
    SelectSQLQuery *string `json:"SelectSqlQuery,omitempty"`
    ServiceRole *string `json:"ServiceRole,omitempty"`
    
}

