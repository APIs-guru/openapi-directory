package shared

// LambdaStepMetadata
// Metadata for a Lambda step.
type LambdaStepMetadata struct {
	Arn              *string           `json:"Arn,omitempty"`
	OutputParameters []OutputParameter `json:"OutputParameters,omitempty"`
}
