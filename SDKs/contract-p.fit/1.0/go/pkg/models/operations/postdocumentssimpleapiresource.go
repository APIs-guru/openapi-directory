package operations

type PostDocumentsSimpleAPIResourcePathParams struct {
	InboxID string `pathParam:"style=simple,explode=false,name=inbox_id"`
}

type PostDocumentsSimpleAPIResourceRequestBodyFile struct {
	Content []byte `multipartForm:"content"`
	File    string `multipartForm:"name=file"`
}

type PostDocumentsSimpleAPIResourceRequestBody struct {
	File         PostDocumentsSimpleAPIResourceRequestBodyFile `multipartForm:"file"`
	Hints        *string                                       `multipartForm:"name=hints"`
	KeyValueFlag *bool                                         `multipartForm:"name=key_value_flag"`
	Sync         *bool                                         `multipartForm:"name=sync"`
}

type PostDocumentsSimpleAPIResourceRequest struct {
	PathParams PostDocumentsSimpleAPIResourcePathParams
	Request    PostDocumentsSimpleAPIResourceRequestBody `request:"mediaType=multipart/form-data"`
}

type PostDocumentsSimpleAPIResourceResponse struct {
	ContentType string
	StatusCode  int64
}
