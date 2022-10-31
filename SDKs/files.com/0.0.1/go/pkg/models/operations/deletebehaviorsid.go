package operations



type DeleteBehaviorsIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteBehaviorsIDRequest struct {
    PathParams DeleteBehaviorsIDPathParams 
    
}

type DeleteBehaviorsIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

