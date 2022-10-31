package operations



type DeletePublicKeysIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeletePublicKeysIDRequest struct {
    PathParams DeletePublicKeysIDPathParams 
    
}

type DeletePublicKeysIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

