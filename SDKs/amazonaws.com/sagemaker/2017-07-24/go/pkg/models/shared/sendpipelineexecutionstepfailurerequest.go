package shared

type SendPipelineExecutionStepFailureRequest struct {
	CallbackToken      string  `json:"CallbackToken"`
	ClientRequestToken *string `json:"ClientRequestToken"`
	FailureReason      *string `json:"FailureReason"`
}
