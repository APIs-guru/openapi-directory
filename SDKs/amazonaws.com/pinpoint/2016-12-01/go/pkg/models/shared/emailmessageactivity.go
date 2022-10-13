package shared

type EmailMessageActivity struct {
	MessageConfig   *JourneyEmailMessage `json:"MessageConfig"`
	NextActivity    *string              `json:"NextActivity"`
	TemplateName    *string              `json:"TemplateName"`
	TemplateVersion *string              `json:"TemplateVersion"`
}
