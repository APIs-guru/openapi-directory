package operations



type DeleteBundlesIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteBundlesIDRequest struct {
    PathParams DeleteBundlesIDPathParams 
    
}

type DeleteBundlesIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

