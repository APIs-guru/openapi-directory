package operations



type GetDocumentOriginalFileResourcePathParams struct {
    DocumentID string `pathParam:"style=simple,explode=false,name=document_id"`
    
}

type GetDocumentOriginalFileResourceRequest struct {
    PathParams GetDocumentOriginalFileResourcePathParams 
    
}

type GetDocumentOriginalFileResourceResponse struct {
    ContentType string 
    StatusCode int64 
    
}

