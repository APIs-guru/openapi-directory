package shared

type UIConfig struct {
	HumanTaskUIArn  *string `json:"HumanTaskUiArn,omitempty"`
	UITemplateS3URI *string `json:"UiTemplateS3Uri,omitempty"`
}
