package shared

type LabelSearchResultItem struct {
	Color       string                    `json:"color"`
	Default     bool                      `json:"default"`
	Description string                    `json:"description"`
	ID          int64                     `json:"id"`
	Name        string                    `json:"name"`
	NodeID      string                    `json:"node_id"`
	Score       float64                   `json:"score"`
	TextMatches []SearchResultTextMatches `json:"text_matches,omitempty"`
	URL         string                    `json:"url"`
}
