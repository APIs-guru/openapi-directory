package shared

type RenderUITemplateRequest struct {
	HumanTaskUIArn *string        `json:"HumanTaskUiArn"`
	RoleArn        string         `json:"RoleArn"`
	Task           RenderableTask `json:"Task"`
	UITemplate     *UITemplate    `json:"UiTemplate"`
}
