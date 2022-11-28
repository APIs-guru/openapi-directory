package shared

// SmsMessageActivity
// Specifies the settings for an SMS activity in a journey. This type of activity sends a text message to participants.
type SmsMessageActivity struct {
	MessageConfig   *JourneySmsMessage `json:"MessageConfig,omitempty"`
	NextActivity    *string            `json:"NextActivity,omitempty"`
	TemplateName    *string            `json:"TemplateName,omitempty"`
	TemplateVersion *string            `json:"TemplateVersion,omitempty"`
}
