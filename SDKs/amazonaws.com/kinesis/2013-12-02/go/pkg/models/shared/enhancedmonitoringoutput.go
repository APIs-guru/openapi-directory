package shared

// EnhancedMonitoringOutput
// Represents the output for <a>EnableEnhancedMonitoring</a> and <a>DisableEnhancedMonitoring</a>.
type EnhancedMonitoringOutput struct {
	CurrentShardLevelMetrics []MetricsNameEnum `json:"CurrentShardLevelMetrics,omitempty"`
	DesiredShardLevelMetrics []MetricsNameEnum `json:"DesiredShardLevelMetrics,omitempty"`
	StreamName               *string           `json:"StreamName,omitempty"`
}
