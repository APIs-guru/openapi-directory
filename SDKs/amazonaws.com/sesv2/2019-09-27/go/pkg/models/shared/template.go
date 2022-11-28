package shared

// Template
// An object that defines the email template to use for an email message, and the values to use for any message variables in that template. An <i>email template</i> is a type of message template that contains content that you want to define, save, and reuse in email messages that you send.
type Template struct {
	TemplateArn  *string `json:"TemplateArn,omitempty"`
	TemplateData *string `json:"TemplateData,omitempty"`
	TemplateName *string `json:"TemplateName,omitempty"`
}
