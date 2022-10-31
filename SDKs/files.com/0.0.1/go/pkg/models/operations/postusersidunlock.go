package operations



type PostUsersIDUnlockPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostUsersIDUnlockRequest struct {
    PathParams PostUsersIDUnlockPathParams 
    
}

type PostUsersIDUnlockResponse struct {
    ContentType string 
    StatusCode int64 
    
}

