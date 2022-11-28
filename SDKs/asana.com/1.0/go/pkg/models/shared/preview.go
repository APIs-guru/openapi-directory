package shared

// Preview
// A collection of rich text that will be displayed as a preview to another app.
//
// This is read-only except for a small group of whitelisted apps.
type Preview struct {
	Fallback   *string `json:"fallback,omitempty"`
	Footer     *string `json:"footer,omitempty"`
	Header     *string `json:"header,omitempty"`
	HeaderLink *string `json:"header_link,omitempty"`
	HTMLText   *string `json:"html_text,omitempty"`
	Text       *string `json:"text,omitempty"`
	Title      *string `json:"title,omitempty"`
	TitleLink  *string `json:"title_link,omitempty"`
}
