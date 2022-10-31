package shared

type LambdaResource struct {
	EventTriggers []EventTriggerDefinition `json:"EventTriggers,omitempty"`
	LambdaArn     *string                  `json:"LambdaArn,omitempty"`
}
