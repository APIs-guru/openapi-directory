package operations

type PostMakePdfRequestBody struct {
	HTML *string `json:"html"`
	Key  string  `json:"key"`
	URL  *string `json:"url"`
}

type PostMakePdfRequest struct {
	Request PostMakePdfRequestBody `request:"mediaType=application/json"`
}

type PostMakePdfResponse struct {
	ContentType                              string
	PostMakePdf200ApplicationPdfBinaryString []byte
	StatusCode                               int64
}
