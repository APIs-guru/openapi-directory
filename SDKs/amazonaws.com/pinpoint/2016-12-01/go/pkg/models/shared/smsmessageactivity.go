package shared

type SmsMessageActivity struct {
	MessageConfig   *JourneySmsMessage `json:"MessageConfig"`
	NextActivity    *string            `json:"NextActivity"`
	TemplateName    *string            `json:"TemplateName"`
	TemplateVersion *string            `json:"TemplateVersion"`
}
