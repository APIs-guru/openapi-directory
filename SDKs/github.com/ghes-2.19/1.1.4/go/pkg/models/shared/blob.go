package shared

type Blob struct {
	Content            string  `json:"content"`
	Encoding           string  `json:"encoding"`
	HighlightedContent *string `json:"highlighted_content,omitempty"`
	NodeID             string  `json:"node_id"`
	Sha                string  `json:"sha"`
	Size               int64   `json:"size"`
	URL                string  `json:"url"`
}
