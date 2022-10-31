package shared

type SearchSegment struct {
	Match *bool   `json:"match,omitempty"`
	Text  *string `json:"text,omitempty"`
}
