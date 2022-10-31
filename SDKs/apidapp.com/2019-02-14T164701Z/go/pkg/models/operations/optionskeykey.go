package operations



type OptionsKeyKeyPathParams struct {
    Key string `pathParam:"style=simple,explode=false,name=key"`
    
}

type OptionsKeyKeyRequest struct {
    PathParams OptionsKeyKeyPathParams 
    
}

type OptionsKeyKeyResponse struct {
    ContentType string 
    Empty map[string]interface{} 
    Headers map[string][]string 
    StatusCode int64 
    
}

