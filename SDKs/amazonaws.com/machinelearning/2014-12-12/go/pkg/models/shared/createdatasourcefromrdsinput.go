package shared

type CreateDataSourceFromRdsInput struct {
	ComputeStatistics *bool       `json:"ComputeStatistics,omitempty"`
	DataSourceID      string      `json:"DataSourceId"`
	DataSourceName    *string     `json:"DataSourceName,omitempty"`
	RdsData           RdsDataSpec `json:"RDSData"`
	RoleArn           string      `json:"RoleARN"`
}
