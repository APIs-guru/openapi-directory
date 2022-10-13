package shared

type EnhancedMonitoringOutput struct {
	CurrentShardLevelMetrics []MetricsNameEnum `json:"CurrentShardLevelMetrics"`
	DesiredShardLevelMetrics []MetricsNameEnum `json:"DesiredShardLevelMetrics"`
	StreamName               *string           `json:"StreamName"`
}
