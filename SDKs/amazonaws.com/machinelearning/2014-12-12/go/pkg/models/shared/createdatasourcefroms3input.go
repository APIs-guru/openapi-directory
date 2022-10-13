package shared

type CreateDataSourceFromS3Input struct {
	ComputeStatistics *bool      `json:"ComputeStatistics"`
	DataSourceID      string     `json:"DataSourceId"`
	DataSourceName    *string    `json:"DataSourceName"`
	DataSpec          S3DataSpec `json:"DataSpec"`
}
