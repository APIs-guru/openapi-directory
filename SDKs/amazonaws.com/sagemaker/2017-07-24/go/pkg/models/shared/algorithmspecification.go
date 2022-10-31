package shared



type AlgorithmSpecification struct {
    AlgorithmName *string `json:"AlgorithmName,omitempty"`
    EnableSageMakerMetricsTimeSeries *bool `json:"EnableSageMakerMetricsTimeSeries,omitempty"`
    MetricDefinitions []MetricDefinition `json:"MetricDefinitions,omitempty"`
    TrainingImage *string `json:"TrainingImage,omitempty"`
    TrainingInputMode TrainingInputModeEnum `json:"TrainingInputMode"`
    
}

