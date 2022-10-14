package shared

type Body struct {
	HTML *Content `json:"Html,omitempty"`
	Text *Content `json:"Text,omitempty"`
}
