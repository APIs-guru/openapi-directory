package shared

// HyperParameterAlgorithmSpecification
// Specifies which training algorithm to use for training jobs that a hyperparameter tuning job launches and the metrics to monitor.
type HyperParameterAlgorithmSpecification struct {
	AlgorithmName     *string               `json:"AlgorithmName,omitempty"`
	MetricDefinitions []MetricDefinition    `json:"MetricDefinitions,omitempty"`
	TrainingImage     *string               `json:"TrainingImage,omitempty"`
	TrainingInputMode TrainingInputModeEnum `json:"TrainingInputMode"`
}
