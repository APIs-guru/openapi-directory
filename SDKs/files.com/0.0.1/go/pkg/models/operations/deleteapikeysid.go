package operations



type DeleteAPIKeysIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteAPIKeysIDRequest struct {
    PathParams DeleteAPIKeysIDPathParams 
    
}

type DeleteAPIKeysIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

