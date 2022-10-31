package operations



type DeleteUserRequestsIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteUserRequestsIDRequest struct {
    PathParams DeleteUserRequestsIDPathParams 
    
}

type DeleteUserRequestsIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

