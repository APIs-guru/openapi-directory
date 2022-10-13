package shared

type AndroidPushNotificationTemplate struct {
	Action            *ActionEnum `json:"Action"`
	Body              *string     `json:"Body"`
	ImageIconURL      *string     `json:"ImageIconUrl"`
	ImageURL          *string     `json:"ImageUrl"`
	RawContent        *string     `json:"RawContent"`
	SmallImageIconURL *string     `json:"SmallImageIconUrl"`
	Sound             *string     `json:"Sound"`
	Title             *string     `json:"Title"`
	URL               *string     `json:"Url"`
}
