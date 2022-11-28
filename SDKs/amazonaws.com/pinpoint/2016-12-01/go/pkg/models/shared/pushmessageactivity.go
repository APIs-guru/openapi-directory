package shared

// PushMessageActivity
// Specifies the settings for a push notification activity in a journey. This type of activity sends a push notification to participants.
type PushMessageActivity struct {
	MessageConfig   *JourneyPushMessage `json:"MessageConfig,omitempty"`
	NextActivity    *string             `json:"NextActivity,omitempty"`
	TemplateName    *string             `json:"TemplateName,omitempty"`
	TemplateVersion *string             `json:"TemplateVersion,omitempty"`
}
