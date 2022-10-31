package operations



type GetUserBadgesUsernameJSONPathParams struct {
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type GetUserBadgesUsernameJSONRequest struct {
    PathParams GetUserBadgesUsernameJSONPathParams 
    
}

type GetUserBadgesUsernameJSONResponse struct {
    ContentType string 
    GetUserBadgesUsernameJSON200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

