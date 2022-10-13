package shared

type CreateHumanTaskUIRequest struct {
	HumanTaskUIName string     `json:"HumanTaskUiName"`
	Tags            []Tag      `json:"Tags"`
	UITemplate      UITemplate `json:"UiTemplate"`
}
