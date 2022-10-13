package shared

type GetActivityTaskOutput struct {
	Input     *string `json:"input"`
	TaskToken *string `json:"taskToken"`
}
