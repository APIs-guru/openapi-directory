package operations



type PutUUsernamePreferencesAvatarPickJSONPathParams struct {
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type PutUUsernamePreferencesAvatarPickJSONRequest struct {
    PathParams PutUUsernamePreferencesAvatarPickJSONPathParams 
    Request *interface{} `request:"mediaType=application/json"`
    
}

type PutUUsernamePreferencesAvatarPickJSONResponse struct {
    ContentType string 
    PutUUsernamePreferencesAvatarPickJSON200ApplicationJSONAny *interface{} 
    StatusCode int64 
    
}

