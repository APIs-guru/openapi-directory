package shared



type MetricPolicy struct {
    ContainerLevelMetrics ContainerLevelMetricsEnum `json:"ContainerLevelMetrics"`
    MetricPolicyRules []MetricPolicyRule `json:"MetricPolicyRules,omitempty"`
    
}

