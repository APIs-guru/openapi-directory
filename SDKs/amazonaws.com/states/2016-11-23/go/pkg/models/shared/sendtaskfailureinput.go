package shared

type SendTaskFailureInput struct {
	Cause     *string `json:"cause,omitempty"`
	Error     *string `json:"error,omitempty"`
	TaskToken string  `json:"taskToken"`
}
