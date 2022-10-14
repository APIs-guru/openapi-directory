package shared

type EmailMessageActivity struct {
	MessageConfig   *JourneyEmailMessage `json:"MessageConfig,omitempty"`
	NextActivity    *string              `json:"NextActivity,omitempty"`
	TemplateName    *string              `json:"TemplateName,omitempty"`
	TemplateVersion *string              `json:"TemplateVersion,omitempty"`
}
