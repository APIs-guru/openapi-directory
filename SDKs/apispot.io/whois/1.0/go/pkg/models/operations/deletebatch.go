package operations



type DeleteBatchPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteBatchRequest struct {
    PathParams DeleteBatchPathParams 
    
}

type DeleteBatchResponse struct {
    ContentType string 
    StatusCode int64 
    
}

