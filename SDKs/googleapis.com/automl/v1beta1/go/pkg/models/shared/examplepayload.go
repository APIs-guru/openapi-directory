package shared

type ExamplePayload struct {
	Document    *Document    `json:"document"`
	Image       *Image       `json:"image"`
	Row         *Row         `json:"row"`
	TextSnippet *TextSnippet `json:"textSnippet"`
}
