package shared

type ExamplePayload struct {
	Document    *Document    `json:"document,omitempty"`
	Image       *Image       `json:"image,omitempty"`
	Row         *Row         `json:"row,omitempty"`
	TextSnippet *TextSnippet `json:"textSnippet,omitempty"`
}
