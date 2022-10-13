package shared

type HyperParameterAlgorithmSpecification struct {
	AlgorithmName     *string               `json:"AlgorithmName"`
	MetricDefinitions []MetricDefinition    `json:"MetricDefinitions"`
	TrainingImage     *string               `json:"TrainingImage"`
	TrainingInputMode TrainingInputModeEnum `json:"TrainingInputMode"`
}
