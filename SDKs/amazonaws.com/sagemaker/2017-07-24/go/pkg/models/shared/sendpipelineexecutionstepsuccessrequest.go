package shared

type SendPipelineExecutionStepSuccessRequest struct {
	CallbackToken      string            `json:"CallbackToken"`
	ClientRequestToken *string           `json:"ClientRequestToken"`
	OutputParameters   []OutputParameter `json:"OutputParameters"`
}
