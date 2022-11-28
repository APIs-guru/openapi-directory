package shared

// DefaultPushNotificationTemplate
// Specifies the default settings and content for a message template that can be used in messages that are sent through a push notification channel.
type DefaultPushNotificationTemplate struct {
	Action *ActionEnum `json:"Action,omitempty"`
	Body   *string     `json:"Body,omitempty"`
	Sound  *string     `json:"Sound,omitempty"`
	Title  *string     `json:"Title,omitempty"`
	URL    *string     `json:"Url,omitempty"`
}
