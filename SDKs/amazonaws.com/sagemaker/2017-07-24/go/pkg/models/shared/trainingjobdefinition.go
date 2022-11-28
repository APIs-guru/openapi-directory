package shared

// TrainingJobDefinition
// Defines the input needed to run a training job using the algorithm.
type TrainingJobDefinition struct {
	HyperParameters   map[string]string     `json:"HyperParameters,omitempty"`
	InputDataConfig   []Channel             `json:"InputDataConfig"`
	OutputDataConfig  OutputDataConfig      `json:"OutputDataConfig"`
	ResourceConfig    ResourceConfig        `json:"ResourceConfig"`
	StoppingCondition StoppingCondition     `json:"StoppingCondition"`
	TrainingInputMode TrainingInputModeEnum `json:"TrainingInputMode"`
}
