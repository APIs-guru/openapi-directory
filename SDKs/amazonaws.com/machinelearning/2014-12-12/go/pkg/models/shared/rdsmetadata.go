package shared

type RdsMetadata struct {
	DataPipelineID   *string      `json:"DataPipelineId"`
	Database         *RdsDatabase `json:"Database"`
	DatabaseUserName *string      `json:"DatabaseUserName"`
	ResourceRole     *string      `json:"ResourceRole"`
	SelectSQLQuery   *string      `json:"SelectSqlQuery"`
	ServiceRole      *string      `json:"ServiceRole"`
}
