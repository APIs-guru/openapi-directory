package shared

type Snippet struct {
	Description []string `json:"description,omitempty"`
	Text        []string `json:"text,omitempty"`
	Title       []string `json:"title,omitempty"`
}
