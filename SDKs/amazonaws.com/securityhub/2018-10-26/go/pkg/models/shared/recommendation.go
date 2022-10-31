package shared

type Recommendation struct {
	Text *string `json:"Text,omitempty"`
	URL  *string `json:"Url,omitempty"`
}
