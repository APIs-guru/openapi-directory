package shared

type TextSnippet struct {
	Content    *string `json:"content"`
	ContentURI *string `json:"contentUri"`
	MimeType   *string `json:"mimeType"`
}
