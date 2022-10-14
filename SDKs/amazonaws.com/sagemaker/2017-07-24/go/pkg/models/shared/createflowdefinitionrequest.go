package shared

type CreateFlowDefinitionRequest struct {
	FlowDefinitionName        string                     `json:"FlowDefinitionName"`
	HumanLoopActivationConfig *HumanLoopActivationConfig `json:"HumanLoopActivationConfig,omitempty"`
	HumanLoopConfig           HumanLoopConfig            `json:"HumanLoopConfig"`
	HumanLoopRequestSource    *HumanLoopRequestSource    `json:"HumanLoopRequestSource,omitempty"`
	OutputConfig              FlowDefinitionOutputConfig `json:"OutputConfig"`
	RoleArn                   string                     `json:"RoleArn"`
	Tags                      []Tag                      `json:"Tags,omitempty"`
}
