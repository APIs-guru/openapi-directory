package operations



type PostSimpleDocumentsResourceRequestBodyFile struct {
    Content []byte `multipartForm:"content"`
    File string `multipartForm:"name=file"`
    
}

type PostSimpleDocumentsResourceRequestBody struct {
    File PostSimpleDocumentsResourceRequestBodyFile `multipartForm:"file"`
    InboxID *string `multipartForm:"name=inbox_id"`
    KeyValueFlag *bool `multipartForm:"name=key_value_flag"`
    
}

type PostSimpleDocumentsResourceRequest struct {
    Request PostSimpleDocumentsResourceRequestBody `request:"mediaType=multipart/form-data"`
    
}

type PostSimpleDocumentsResourceResponse struct {
    ContentType string 
    StatusCode int64 
    
}

