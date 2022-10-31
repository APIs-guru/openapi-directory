package shared



type FinalAutoMlJobObjectiveMetric struct {
    MetricName AutoMlMetricEnumEnum `json:"MetricName"`
    Type *AutoMlJobObjectiveTypeEnum `json:"Type,omitempty"`
    Value float32 `json:"Value"`
    
}

