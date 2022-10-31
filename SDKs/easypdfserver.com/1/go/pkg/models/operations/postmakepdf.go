package operations

type PostMakePdfRequestBody struct {
	HTML *string `json:"html,omitempty"`
	Key  string  `json:"key"`
	URL  *string `json:"url,omitempty"`
}

type PostMakePdfRequest struct {
	Request PostMakePdfRequestBody `request:"mediaType=application/json"`
}

type PostMakePdfResponse struct {
	ContentType                              string
	PostMakePdf200ApplicationPdfBinaryString []byte
	StatusCode                               int64
}
