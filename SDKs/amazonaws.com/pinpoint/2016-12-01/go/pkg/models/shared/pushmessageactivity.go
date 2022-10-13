package shared

type PushMessageActivity struct {
	MessageConfig   *JourneyPushMessage `json:"MessageConfig"`
	NextActivity    *string             `json:"NextActivity"`
	TemplateName    *string             `json:"TemplateName"`
	TemplateVersion *string             `json:"TemplateVersion"`
}
