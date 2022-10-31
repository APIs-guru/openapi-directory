package shared

type StorePage struct {
	ID   *string         `json:"id,omitempty"`
	Link []string        `json:"link,omitempty"`
	Name []LocalizedText `json:"name,omitempty"`
}
