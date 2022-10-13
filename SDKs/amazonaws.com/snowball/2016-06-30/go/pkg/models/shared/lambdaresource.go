package shared

type LambdaResource struct {
	EventTriggers []EventTriggerDefinition `json:"EventTriggers"`
	LambdaArn     *string                  `json:"LambdaArn"`
}
