package operations



type DeleteRequestsIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteRequestsIDRequest struct {
    PathParams DeleteRequestsIDPathParams 
    
}

type DeleteRequestsIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

