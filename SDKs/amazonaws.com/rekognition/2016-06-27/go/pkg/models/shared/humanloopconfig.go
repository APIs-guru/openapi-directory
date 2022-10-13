package shared

type HumanLoopConfig struct {
	DataAttributes    *HumanLoopDataAttributes `json:"DataAttributes"`
	FlowDefinitionArn string                   `json:"FlowDefinitionArn"`
	HumanLoopName     string                   `json:"HumanLoopName"`
}
