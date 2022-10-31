package operations



type DeleteBinIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteBinIDRequest struct {
    PathParams DeleteBinIDPathParams 
    
}

type DeleteBinIDResponse struct {
    ContentType string 
    DeleteStatus *interface{} 
    Error *interface{} 
    StatusCode int64 
    
}

