package shared

type DefaultPushNotificationTemplate struct {
	Action *ActionEnum `json:"Action,omitempty"`
	Body   *string     `json:"Body,omitempty"`
	Sound  *string     `json:"Sound,omitempty"`
	Title  *string     `json:"Title,omitempty"`
	URL    *string     `json:"Url,omitempty"`
}
