package shared

// TemplateConfiguration
// Specifies the message template to use for the message, for each type of channel.
type TemplateConfiguration struct {
	EmailTemplate *Template `json:"EmailTemplate,omitempty"`
	PushTemplate  *Template `json:"PushTemplate,omitempty"`
	SmsTemplate   *Template `json:"SMSTemplate,omitempty"`
	VoiceTemplate *Template `json:"VoiceTemplate,omitempty"`
}
