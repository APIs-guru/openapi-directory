package shared

// DisableEnhancedMonitoringInput
// Represents the input for <a>DisableEnhancedMonitoring</a>.
type DisableEnhancedMonitoringInput struct {
	ShardLevelMetrics []MetricsNameEnum `json:"ShardLevelMetrics"`
	StreamName        string            `json:"StreamName"`
}
