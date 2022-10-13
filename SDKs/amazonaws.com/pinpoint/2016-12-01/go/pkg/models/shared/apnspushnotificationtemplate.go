package shared

type ApnsPushNotificationTemplate struct {
	Action     *ActionEnum `json:"Action"`
	Body       *string     `json:"Body"`
	MediaURL   *string     `json:"MediaUrl"`
	RawContent *string     `json:"RawContent"`
	Sound      *string     `json:"Sound"`
	Title      *string     `json:"Title"`
	URL        *string     `json:"Url"`
}
