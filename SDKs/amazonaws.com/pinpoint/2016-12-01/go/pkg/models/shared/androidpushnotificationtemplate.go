package shared

// AndroidPushNotificationTemplate
// Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the ADM (Amazon Device Messaging), Baidu (Baidu Cloud Push), or GCM (Firebase Cloud Messaging, formerly Google Cloud Messaging) channel.
type AndroidPushNotificationTemplate struct {
	Action            *ActionEnum `json:"Action,omitempty"`
	Body              *string     `json:"Body,omitempty"`
	ImageIconURL      *string     `json:"ImageIconUrl,omitempty"`
	ImageURL          *string     `json:"ImageUrl,omitempty"`
	RawContent        *string     `json:"RawContent,omitempty"`
	SmallImageIconURL *string     `json:"SmallImageIconUrl,omitempty"`
	Sound             *string     `json:"Sound,omitempty"`
	Title             *string     `json:"Title,omitempty"`
	URL               *string     `json:"Url,omitempty"`
}
