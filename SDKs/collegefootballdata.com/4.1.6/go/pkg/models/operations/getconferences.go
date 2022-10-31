package operations

import (
"openapi/pkg/models/shared")

type GetConferencesResponse struct {
    Conferences []shared.Conference 
    ContentType string 
    StatusCode int64 
    
}

