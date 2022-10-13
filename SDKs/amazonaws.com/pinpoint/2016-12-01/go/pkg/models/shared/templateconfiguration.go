package shared

type TemplateConfiguration struct {
	EmailTemplate *Template `json:"EmailTemplate"`
	PushTemplate  *Template `json:"PushTemplate"`
	SmsTemplate   *Template `json:"SMSTemplate"`
	VoiceTemplate *Template `json:"VoiceTemplate"`
}
