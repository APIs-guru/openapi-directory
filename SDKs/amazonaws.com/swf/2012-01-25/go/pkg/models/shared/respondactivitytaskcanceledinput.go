package shared

type RespondActivityTaskCanceledInput struct {
	Details   *string `json:"details"`
	TaskToken string  `json:"taskToken"`
}
