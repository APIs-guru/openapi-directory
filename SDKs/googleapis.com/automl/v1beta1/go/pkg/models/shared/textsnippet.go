package shared

type TextSnippet struct {
	Content    *string `json:"content,omitempty"`
	ContentURI *string `json:"contentUri,omitempty"`
	MimeType   *string `json:"mimeType,omitempty"`
}
