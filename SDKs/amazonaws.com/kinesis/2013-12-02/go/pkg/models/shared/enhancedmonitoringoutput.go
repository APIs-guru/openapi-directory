package shared

type EnhancedMonitoringOutput struct {
	CurrentShardLevelMetrics []MetricsNameEnum `json:"CurrentShardLevelMetrics,omitempty"`
	DesiredShardLevelMetrics []MetricsNameEnum `json:"DesiredShardLevelMetrics,omitempty"`
	StreamName               *string           `json:"StreamName,omitempty"`
}
