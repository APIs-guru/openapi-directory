package shared

// EmailMessageActivity
// Specifies the settings for an email activity in a journey. This type of activity sends an email message to participants.
type EmailMessageActivity struct {
	MessageConfig   *JourneyEmailMessage `json:"MessageConfig,omitempty"`
	NextActivity    *string              `json:"NextActivity,omitempty"`
	TemplateName    *string              `json:"TemplateName,omitempty"`
	TemplateVersion *string              `json:"TemplateVersion,omitempty"`
}
