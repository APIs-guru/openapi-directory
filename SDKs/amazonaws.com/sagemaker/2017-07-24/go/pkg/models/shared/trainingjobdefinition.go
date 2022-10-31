package shared

type TrainingJobDefinition struct {
	HyperParameters   map[string]string     `json:"HyperParameters,omitempty"`
	InputDataConfig   []Channel             `json:"InputDataConfig"`
	OutputDataConfig  OutputDataConfig      `json:"OutputDataConfig"`
	ResourceConfig    ResourceConfig        `json:"ResourceConfig"`
	StoppingCondition StoppingCondition     `json:"StoppingCondition"`
	TrainingInputMode TrainingInputModeEnum `json:"TrainingInputMode"`
}
