package shared



type MetricSource struct {
    AppFlowConfig *AppFlowConfig `json:"AppFlowConfig,omitempty"`
    CloudWatchConfig *CloudWatchConfig `json:"CloudWatchConfig,omitempty"`
    RdsSourceConfig *RdsSourceConfig `json:"RDSSourceConfig,omitempty"`
    RedshiftSourceConfig *RedshiftSourceConfig `json:"RedshiftSourceConfig,omitempty"`
    S3SourceConfig *S3SourceConfig `json:"S3SourceConfig,omitempty"`
    
}

