package shared

type CallbackStepMetadata struct {
	CallbackToken    *string           `json:"CallbackToken"`
	OutputParameters []OutputParameter `json:"OutputParameters"`
	SqsQueueURL      *string           `json:"SqsQueueUrl"`
}
