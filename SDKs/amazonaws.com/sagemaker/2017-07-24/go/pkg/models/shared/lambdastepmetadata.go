package shared

type LambdaStepMetadata struct {
	Arn              *string           `json:"Arn"`
	OutputParameters []OutputParameter `json:"OutputParameters"`
}
