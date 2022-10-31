package shared



type DisableEnhancedMonitoringInput struct {
    ShardLevelMetrics []MetricsNameEnum `json:"ShardLevelMetrics"`
    StreamName string `json:"StreamName"`
    
}

