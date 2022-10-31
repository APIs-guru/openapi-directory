package operations



type FilterFileDataStoppingsPathParams struct {
    Type string `pathParam:"style=simple,explode=false,name=type"`
    
}

type FilterFileDataStoppingsRequestBodyFile struct {
    Content []byte `multipartForm:"content"`
    File string `multipartForm:"name=file"`
    
}

type FilterFileDataStoppingsRequestBody struct {
    File *FilterFileDataStoppingsRequestBodyFile `multipartForm:"file"`
    
}

type FilterFileDataStoppingsRequest struct {
    PathParams FilterFileDataStoppingsPathParams 
    Request FilterFileDataStoppingsRequestBody `request:"mediaType=multipart/form-data"`
    
}

type FilterFileDataStoppingsResponse struct {
    ContentType string 
    ExudeResponseBean *interface{} 
    StatusCode int64 
    
}

