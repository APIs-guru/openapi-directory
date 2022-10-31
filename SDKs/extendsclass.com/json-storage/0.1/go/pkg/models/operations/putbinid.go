package operations



type PutBinIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutBinIDRequest struct {
    PathParams PutBinIDPathParams 
    
}

type PutBinIDResponse struct {
    ContentType string 
    Error *interface{} 
    StatusCode int64 
    UpdateStatus *interface{} 
    
}

