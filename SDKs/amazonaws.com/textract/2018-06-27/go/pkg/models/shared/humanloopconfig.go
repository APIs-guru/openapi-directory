package shared

type HumanLoopConfig struct {
	DataAttributes    *HumanLoopDataAttributes `json:"DataAttributes,omitempty"`
	FlowDefinitionArn string                   `json:"FlowDefinitionArn"`
	HumanLoopName     string                   `json:"HumanLoopName"`
}
