package shared

// CallbackStepMetadata
// Metadata about a callback step.
type CallbackStepMetadata struct {
	CallbackToken    *string           `json:"CallbackToken,omitempty"`
	OutputParameters []OutputParameter `json:"OutputParameters,omitempty"`
	SqsQueueURL      *string           `json:"SqsQueueUrl,omitempty"`
}
