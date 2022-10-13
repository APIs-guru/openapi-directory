package shared

type MetricSource struct {
	AppFlowConfig        *AppFlowConfig        `json:"AppFlowConfig"`
	CloudWatchConfig     *CloudWatchConfig     `json:"CloudWatchConfig"`
	RdsSourceConfig      *RdsSourceConfig      `json:"RDSSourceConfig"`
	RedshiftSourceConfig *RedshiftSourceConfig `json:"RedshiftSourceConfig"`
	S3SourceConfig       *S3SourceConfig       `json:"S3SourceConfig"`
}
