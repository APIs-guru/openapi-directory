package shared



type TrainingSpecification struct {
    MetricDefinitions []MetricDefinition `json:"MetricDefinitions,omitempty"`
    SupportedHyperParameters []HyperParameterSpecification `json:"SupportedHyperParameters,omitempty"`
    SupportedTrainingInstanceTypes []TrainingInstanceTypeEnum `json:"SupportedTrainingInstanceTypes"`
    SupportedTuningJobObjectiveMetrics []HyperParameterTuningJobObjective `json:"SupportedTuningJobObjectiveMetrics,omitempty"`
    SupportsDistributedTraining *bool `json:"SupportsDistributedTraining,omitempty"`
    TrainingChannels []ChannelSpecification `json:"TrainingChannels"`
    TrainingImage string `json:"TrainingImage"`
    TrainingImageDigest *string `json:"TrainingImageDigest,omitempty"`
    
}

