package shared

type SendPipelineExecutionStepFailureRequest struct {
	CallbackToken      string  `json:"CallbackToken"`
	ClientRequestToken *string `json:"ClientRequestToken,omitempty"`
	FailureReason      *string `json:"FailureReason,omitempty"`
}
