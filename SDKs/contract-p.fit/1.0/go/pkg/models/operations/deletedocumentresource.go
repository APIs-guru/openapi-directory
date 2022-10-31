package operations

type DeleteDocumentResourcePathParams struct {
	DocumentID string `pathParam:"style=simple,explode=false,name=document_id"`
}

type DeleteDocumentResourceRequest struct {
	PathParams DeleteDocumentResourcePathParams
}

type DeleteDocumentResourceResponse struct {
	ContentType string
	StatusCode  int64
}
