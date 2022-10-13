package shared

type SendTaskFailureInput struct {
	Cause     *string `json:"cause"`
	Error     *string `json:"error"`
	TaskToken string  `json:"taskToken"`
}
