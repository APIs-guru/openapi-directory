package operations

type MarkdownRenderRawRequests struct {
	TextPlain     []byte `request:"mediaType=text/plain"`
	TextXMarkdown []byte `request:"mediaType=text/x-markdown"`
}

type MarkdownRenderRawRequest struct {
	Request *MarkdownRenderRawRequests
}

type MarkdownRenderRawResponse struct {
	Body        []byte
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
