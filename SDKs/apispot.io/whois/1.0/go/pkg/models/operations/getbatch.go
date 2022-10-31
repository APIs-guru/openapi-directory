package operations



type GetBatchPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetBatchRequest struct {
    PathParams GetBatchPathParams 
    
}

type GetBatchResponse struct {
    Batch *interface{} 
    ContentType string 
    StatusCode int64 
    
}

