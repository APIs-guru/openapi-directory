package operations

type GetDocumentTextResourcePathParams struct {
	DocumentID string `pathParam:"style=simple,explode=false,name=document_id"`
}

type GetDocumentTextResourceRequest struct {
	PathParams GetDocumentTextResourcePathParams
}

type GetDocumentTextResourceResponse struct {
	ContentType string
	StatusCode  int64
}
