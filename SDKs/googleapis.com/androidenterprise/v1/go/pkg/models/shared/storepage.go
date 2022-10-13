package shared

type StorePage struct {
	ID   *string         `json:"id"`
	Link []string        `json:"link"`
	Name []LocalizedText `json:"name"`
}
