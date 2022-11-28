package shared

// HumanLoopConfig
// Sets up the human review workflow the document will be sent to if one of the conditions is met. You can also set certain attributes of the image before review.
type HumanLoopConfig struct {
	DataAttributes    *HumanLoopDataAttributes `json:"DataAttributes,omitempty"`
	FlowDefinitionArn string                   `json:"FlowDefinitionArn"`
	HumanLoopName     string                   `json:"HumanLoopName"`
}
