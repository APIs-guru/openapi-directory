package shared

type Links struct {
	Current  string  `json:"current"`
	Next     *string `json:"next,omitempty"`
	Previous *string `json:"previous,omitempty"`
}
