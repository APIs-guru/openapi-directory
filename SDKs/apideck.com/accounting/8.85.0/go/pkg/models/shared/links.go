package shared

// Links
// Links to navigate to previous or next pages through the API
type Links struct {
	Current  *string `json:"current,omitempty"`
	Next     *string `json:"next,omitempty"`
	Previous *string `json:"previous,omitempty"`
}
