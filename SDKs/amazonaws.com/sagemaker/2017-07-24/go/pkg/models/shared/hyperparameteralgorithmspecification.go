package shared



type HyperParameterAlgorithmSpecification struct {
    AlgorithmName *string `json:"AlgorithmName,omitempty"`
    MetricDefinitions []MetricDefinition `json:"MetricDefinitions,omitempty"`
    TrainingImage *string `json:"TrainingImage,omitempty"`
    TrainingInputMode TrainingInputModeEnum `json:"TrainingInputMode"`
    
}

