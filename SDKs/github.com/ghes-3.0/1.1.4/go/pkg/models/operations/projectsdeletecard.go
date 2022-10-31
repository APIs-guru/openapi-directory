package operations

import (
"openapi/pkg/models/shared")

type ProjectsDeleteCardPathParams struct {
    CardID int64 `pathParam:"style=simple,explode=false,name=card_id"`
    
}

type ProjectsDeleteCardRequest struct {
    PathParams ProjectsDeleteCardPathParams 
    
}

type ProjectsDeleteCard403ApplicationJSON struct {
    DocumentationURL *string `json:"documentation_url,omitempty"`
    Errors []string `json:"errors,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type ProjectsDeleteCardResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    ProjectsDeleteCard403ApplicationJSONObject *ProjectsDeleteCard403ApplicationJSON 
    
}

