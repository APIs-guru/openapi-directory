package operations



type ContentGetContentTypePathParams struct {
    Type string `pathParam:"style=simple,explode=false,name=type"`
    
}

type ContentGetContentTypeRequest struct {
    PathParams ContentGetContentTypePathParams 
    
}

type ContentGetContentTypeResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

