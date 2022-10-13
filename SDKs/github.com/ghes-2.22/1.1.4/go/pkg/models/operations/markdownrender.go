package operations

type MarkdownRenderRequestBodyModeEnum string

const (
	MarkdownRenderRequestBodyModeEnumMarkdown MarkdownRenderRequestBodyModeEnum = "markdown"
	MarkdownRenderRequestBodyModeEnumGfm      MarkdownRenderRequestBodyModeEnum = "gfm"
)

type MarkdownRenderRequestBody struct {
	Context *string                            `json:"context"`
	Mode    *MarkdownRenderRequestBodyModeEnum `json:"mode"`
	Text    string                             `json:"text"`
}

type MarkdownRenderRequest struct {
	Request *MarkdownRenderRequestBody `request:"mediaType=application/json"`
}

type MarkdownRenderResponse struct {
	Body        []byte
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
