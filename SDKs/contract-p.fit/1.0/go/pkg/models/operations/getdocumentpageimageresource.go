package operations



type GetDocumentPageImageResourcePathParams struct {
    DocumentID string `pathParam:"style=simple,explode=false,name=document_id"`
    PageRange string `pathParam:"style=simple,explode=false,name=page_range"`
    
}

type GetDocumentPageImageResourceRequest struct {
    PathParams GetDocumentPageImageResourcePathParams 
    
}

type GetDocumentPageImageResourceResponse struct {
    ContentType string 
    StatusCode int64 
    
}

