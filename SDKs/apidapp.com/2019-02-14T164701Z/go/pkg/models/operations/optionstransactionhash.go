package operations



type OptionsTransactionHashPathParams struct {
    Hash string `pathParam:"style=simple,explode=false,name=hash"`
    
}

type OptionsTransactionHashRequest struct {
    PathParams OptionsTransactionHashPathParams 
    
}

type OptionsTransactionHashResponse struct {
    ContentType string 
    Empty map[string]interface{} 
    Headers map[string][]string 
    StatusCode int64 
    
}

