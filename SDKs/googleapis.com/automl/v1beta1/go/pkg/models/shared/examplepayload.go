package shared

// ExamplePayload
// Example data used for training or prediction.
type ExamplePayload struct {
	Document    *Document    `json:"document,omitempty"`
	Image       *Image       `json:"image,omitempty"`
	Row         *Row         `json:"row,omitempty"`
	TextSnippet *TextSnippet `json:"textSnippet,omitempty"`
}
