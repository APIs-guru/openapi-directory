package shared

type GetActivityTaskOutput struct {
	Input     *string `json:"input,omitempty"`
	TaskToken *string `json:"taskToken,omitempty"`
}
