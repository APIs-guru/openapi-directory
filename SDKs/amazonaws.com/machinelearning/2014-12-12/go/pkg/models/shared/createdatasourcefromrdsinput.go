package shared

type CreateDataSourceFromRdsInput struct {
	ComputeStatistics *bool       `json:"ComputeStatistics"`
	DataSourceID      string      `json:"DataSourceId"`
	DataSourceName    *string     `json:"DataSourceName"`
	RdsData           RdsDataSpec `json:"RDSData"`
	RoleArn           string      `json:"RoleARN"`
}
