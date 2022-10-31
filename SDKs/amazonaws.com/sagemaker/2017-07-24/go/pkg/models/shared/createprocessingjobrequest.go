package shared

type CreateProcessingJobRequest struct {
	AppSpecification       AppSpecification             `json:"AppSpecification"`
	Environment            map[string]string            `json:"Environment,omitempty"`
	ExperimentConfig       *ExperimentConfig            `json:"ExperimentConfig,omitempty"`
	NetworkConfig          *NetworkConfig               `json:"NetworkConfig,omitempty"`
	ProcessingInputs       []ProcessingInput            `json:"ProcessingInputs,omitempty"`
	ProcessingJobName      string                       `json:"ProcessingJobName"`
	ProcessingOutputConfig *ProcessingOutputConfig      `json:"ProcessingOutputConfig,omitempty"`
	ProcessingResources    ProcessingResources          `json:"ProcessingResources"`
	RoleArn                string                       `json:"RoleArn"`
	StoppingCondition      *ProcessingStoppingCondition `json:"StoppingCondition,omitempty"`
	Tags                   []Tag                        `json:"Tags,omitempty"`
}
