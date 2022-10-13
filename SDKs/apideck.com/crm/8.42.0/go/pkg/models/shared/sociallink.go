package shared

type SocialLink struct {
	ID   *string `json:"id"`
	Type *string `json:"type"`
	URL  string  `json:"url"`
}
