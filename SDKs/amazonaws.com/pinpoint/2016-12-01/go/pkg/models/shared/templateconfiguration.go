package shared



type TemplateConfiguration struct {
    EmailTemplate *Template `json:"EmailTemplate,omitempty"`
    PushTemplate *Template `json:"PushTemplate,omitempty"`
    SmsTemplate *Template `json:"SMSTemplate,omitempty"`
    VoiceTemplate *Template `json:"VoiceTemplate,omitempty"`
    
}

