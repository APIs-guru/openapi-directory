package operations



type DeleteUsersIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteUsersIDRequest struct {
    PathParams DeleteUsersIDPathParams 
    
}

type DeleteUsersIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

