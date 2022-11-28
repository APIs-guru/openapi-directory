package shared

// EnableEnhancedMonitoringInput
// Represents the input for <a>EnableEnhancedMonitoring</a>.
type EnableEnhancedMonitoringInput struct {
	ShardLevelMetrics []MetricsNameEnum `json:"ShardLevelMetrics"`
	StreamName        string            `json:"StreamName"`
}
