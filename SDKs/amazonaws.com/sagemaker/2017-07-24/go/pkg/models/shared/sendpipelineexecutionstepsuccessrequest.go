package shared

type SendPipelineExecutionStepSuccessRequest struct {
	CallbackToken      string            `json:"CallbackToken"`
	ClientRequestToken *string           `json:"ClientRequestToken,omitempty"`
	OutputParameters   []OutputParameter `json:"OutputParameters,omitempty"`
}
