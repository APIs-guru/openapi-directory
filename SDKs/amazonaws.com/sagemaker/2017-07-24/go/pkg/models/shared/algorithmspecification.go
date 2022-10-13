package shared

type AlgorithmSpecification struct {
	AlgorithmName                    *string               `json:"AlgorithmName"`
	EnableSageMakerMetricsTimeSeries *bool                 `json:"EnableSageMakerMetricsTimeSeries"`
	MetricDefinitions                []MetricDefinition    `json:"MetricDefinitions"`
	TrainingImage                    *string               `json:"TrainingImage"`
	TrainingInputMode                TrainingInputModeEnum `json:"TrainingInputMode"`
}
