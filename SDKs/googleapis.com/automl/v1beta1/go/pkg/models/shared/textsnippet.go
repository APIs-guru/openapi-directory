package shared

// TextSnippet
// A representation of a text snippet.
type TextSnippet struct {
	Content    *string `json:"content,omitempty"`
	ContentURI *string `json:"contentUri,omitempty"`
	MimeType   *string `json:"mimeType,omitempty"`
}
