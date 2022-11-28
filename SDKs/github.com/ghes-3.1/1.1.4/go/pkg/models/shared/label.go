package shared

// Label
// Color-coded labels help you categorize and filter your issues (just like labels in Gmail).
type Label struct {
	Color       string `json:"color"`
	Default     bool   `json:"default"`
	Description string `json:"description"`
	ID          int64  `json:"id"`
	Name        string `json:"name"`
	NodeID      string `json:"node_id"`
	URL         string `json:"url"`
}
