package shared

type DefaultPushNotificationTemplate struct {
	Action *ActionEnum `json:"Action"`
	Body   *string     `json:"Body"`
	Sound  *string     `json:"Sound"`
	Title  *string     `json:"Title"`
	URL    *string     `json:"Url"`
}
