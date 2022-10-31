package shared

type CreateHumanTaskUIRequest struct {
	HumanTaskUIName string     `json:"HumanTaskUiName"`
	Tags            []Tag      `json:"Tags,omitempty"`
	UITemplate      UITemplate `json:"UiTemplate"`
}
