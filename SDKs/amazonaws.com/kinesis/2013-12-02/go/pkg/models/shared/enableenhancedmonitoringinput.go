package shared

type EnableEnhancedMonitoringInput struct {
	ShardLevelMetrics []MetricsNameEnum `json:"ShardLevelMetrics"`
	StreamName        string            `json:"StreamName"`
}
