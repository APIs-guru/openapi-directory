package shared



type CreateDataSourceFromS3Input struct {
    ComputeStatistics *bool `json:"ComputeStatistics,omitempty"`
    DataSourceID string `json:"DataSourceId"`
    DataSourceName *string `json:"DataSourceName,omitempty"`
    DataSpec S3DataSpec `json:"DataSpec"`
    
}

