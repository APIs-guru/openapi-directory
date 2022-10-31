package operations



type OptionsBlockIDTransactionPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type OptionsBlockIDTransactionRequest struct {
    PathParams OptionsBlockIDTransactionPathParams 
    
}

type OptionsBlockIDTransactionResponse struct {
    ContentType string 
    Empty map[string]interface{} 
    Headers map[string][]string 
    StatusCode int64 
    
}

