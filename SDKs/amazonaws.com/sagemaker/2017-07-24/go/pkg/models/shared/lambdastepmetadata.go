package shared

type LambdaStepMetadata struct {
	Arn              *string           `json:"Arn,omitempty"`
	OutputParameters []OutputParameter `json:"OutputParameters,omitempty"`
}
