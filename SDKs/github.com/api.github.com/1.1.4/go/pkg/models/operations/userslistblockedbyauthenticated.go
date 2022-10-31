package operations

import (
"openapi/pkg/models/shared")

type UsersListBlockedByAuthenticated415ApplicationJSON struct {
    DocumentationURL string `json:"documentation_url"`
    Message string `json:"message"`
    
}

type UsersListBlockedByAuthenticatedResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    SimpleUsers []shared.SimpleUser 
    UsersListBlockedByAuthenticated415ApplicationJSONObject *UsersListBlockedByAuthenticated415ApplicationJSON 
    
}

