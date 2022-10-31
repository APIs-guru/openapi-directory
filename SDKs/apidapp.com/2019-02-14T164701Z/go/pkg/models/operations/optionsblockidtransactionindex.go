package operations



type OptionsBlockIDTransactionIndexPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Index string `pathParam:"style=simple,explode=false,name=index"`
    
}

type OptionsBlockIDTransactionIndexRequest struct {
    PathParams OptionsBlockIDTransactionIndexPathParams 
    
}

type OptionsBlockIDTransactionIndexResponse struct {
    ContentType string 
    Empty map[string]interface{} 
    Headers map[string][]string 
    StatusCode int64 
    
}

