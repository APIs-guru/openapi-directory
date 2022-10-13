package shared

type CreateDataSourceFromRedshiftInput struct {
	ComputeStatistics *bool            `json:"ComputeStatistics"`
	DataSourceID      string           `json:"DataSourceId"`
	DataSourceName    *string          `json:"DataSourceName"`
	DataSpec          RedshiftDataSpec `json:"DataSpec"`
	RoleArn           string           `json:"RoleARN"`
}
