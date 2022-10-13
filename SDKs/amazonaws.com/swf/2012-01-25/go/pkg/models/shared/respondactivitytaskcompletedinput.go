package shared

type RespondActivityTaskCompletedInput struct {
	Result    *string `json:"result"`
	TaskToken string  `json:"taskToken"`
}
