package shared

type TrainingSpecification struct {
	MetricDefinitions                  []MetricDefinition                 `json:"MetricDefinitions"`
	SupportedHyperParameters           []HyperParameterSpecification      `json:"SupportedHyperParameters"`
	SupportedTrainingInstanceTypes     []TrainingInstanceTypeEnum         `json:"SupportedTrainingInstanceTypes"`
	SupportedTuningJobObjectiveMetrics []HyperParameterTuningJobObjective `json:"SupportedTuningJobObjectiveMetrics"`
	SupportsDistributedTraining        *bool                              `json:"SupportsDistributedTraining"`
	TrainingChannels                   []ChannelSpecification             `json:"TrainingChannels"`
	TrainingImage                      string                             `json:"TrainingImage"`
	TrainingImageDigest                *string                            `json:"TrainingImageDigest"`
}
