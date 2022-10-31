package shared



type PushMessageActivity struct {
    MessageConfig *JourneyPushMessage `json:"MessageConfig,omitempty"`
    NextActivity *string `json:"NextActivity,omitempty"`
    TemplateName *string `json:"TemplateName,omitempty"`
    TemplateVersion *string `json:"TemplateVersion,omitempty"`
    
}

