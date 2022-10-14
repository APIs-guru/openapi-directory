package shared

type RespondActivityTaskCompletedInput struct {
	Result    *string `json:"result,omitempty"`
	TaskToken string  `json:"taskToken"`
}
