package shared

type CreateProcessingJobRequest struct {
	AppSpecification       AppSpecification             `json:"AppSpecification"`
	Environment            map[string]string            `json:"Environment"`
	ExperimentConfig       *ExperimentConfig            `json:"ExperimentConfig"`
	NetworkConfig          *NetworkConfig               `json:"NetworkConfig"`
	ProcessingInputs       []ProcessingInput            `json:"ProcessingInputs"`
	ProcessingJobName      string                       `json:"ProcessingJobName"`
	ProcessingOutputConfig *ProcessingOutputConfig      `json:"ProcessingOutputConfig"`
	ProcessingResources    ProcessingResources          `json:"ProcessingResources"`
	RoleArn                string                       `json:"RoleArn"`
	StoppingCondition      *ProcessingStoppingCondition `json:"StoppingCondition"`
	Tags                   []Tag                        `json:"Tags"`
}
