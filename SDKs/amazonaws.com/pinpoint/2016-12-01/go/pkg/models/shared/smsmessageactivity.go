package shared

type SmsMessageActivity struct {
	MessageConfig   *JourneySmsMessage `json:"MessageConfig,omitempty"`
	NextActivity    *string            `json:"NextActivity,omitempty"`
	TemplateName    *string            `json:"TemplateName,omitempty"`
	TemplateVersion *string            `json:"TemplateVersion,omitempty"`
}
