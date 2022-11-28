package shared

// RdsMetadata
// The datasource details that are specific to Amazon RDS.
type RdsMetadata struct {
	DataPipelineID   *string      `json:"DataPipelineId,omitempty"`
	Database         *RdsDatabase `json:"Database,omitempty"`
	DatabaseUserName *string      `json:"DatabaseUserName,omitempty"`
	ResourceRole     *string      `json:"ResourceRole,omitempty"`
	SelectSQLQuery   *string      `json:"SelectSqlQuery,omitempty"`
	ServiceRole      *string      `json:"ServiceRole,omitempty"`
}
