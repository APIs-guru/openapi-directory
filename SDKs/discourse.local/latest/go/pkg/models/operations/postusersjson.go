package operations



type PostUsersJSONHeaders struct {
    APIKey string `header:"style=simple,explode=false,name=Api-Key"`
    APIUsername string `header:"style=simple,explode=false,name=Api-Username"`
    
}

type PostUsersJSONRequestBody struct {
    Active *bool `json:"active,omitempty"`
    Approved *bool `json:"approved,omitempty"`
    Email string `json:"email"`
    Name string `json:"name"`
    Password string `json:"password"`
    UserFields1 *string `json:"user_fields[1],omitempty"`
    Username string `json:"username"`
    
}

type PostUsersJSONRequest struct {
    Headers PostUsersJSONHeaders 
    Request *PostUsersJSONRequestBody `request:"mediaType=application/json"`
    
}

type PostUsersJSON200ApplicationJSON struct {
    Active *bool `json:"active,omitempty"`
    Message *string `json:"message,omitempty"`
    Success *bool `json:"success,omitempty"`
    UserID *int64 `json:"user_id,omitempty"`
    
}

type PostUsersJSONResponse struct {
    ContentType string 
    PostUsersJSON200ApplicationJSONObject *PostUsersJSON200ApplicationJSON 
    StatusCode int64 
    
}

