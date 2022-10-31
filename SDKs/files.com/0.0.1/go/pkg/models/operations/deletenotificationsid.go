package operations



type DeleteNotificationsIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteNotificationsIDRequest struct {
    PathParams DeleteNotificationsIDPathParams 
    
}

type DeleteNotificationsIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}

