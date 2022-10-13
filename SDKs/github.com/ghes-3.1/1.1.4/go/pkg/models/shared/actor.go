package shared

type Actor struct {
	AvatarURL    string  `json:"avatar_url"`
	DisplayLogin *string `json:"display_login"`
	GravatarID   string  `json:"gravatar_id"`
	ID           int64   `json:"id"`
	Login        string  `json:"login"`
	URL          string  `json:"url"`
}
