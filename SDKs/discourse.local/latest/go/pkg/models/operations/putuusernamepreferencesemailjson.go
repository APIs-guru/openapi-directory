package operations



type PutUUsernamePreferencesEmailJSONPathParams struct {
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type PutUUsernamePreferencesEmailJSONRequest struct {
    PathParams PutUUsernamePreferencesEmailJSONPathParams 
    Request *interface{} `request:"mediaType=application/json"`
    
}

type PutUUsernamePreferencesEmailJSONResponse struct {
    ContentType string 
    StatusCode int64 
    
}

