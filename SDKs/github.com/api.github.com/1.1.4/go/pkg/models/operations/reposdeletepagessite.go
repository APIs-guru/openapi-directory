package operations

import (
"openapi/pkg/models/shared")

type ReposDeletePagesSitePathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposDeletePagesSiteRequest struct {
    PathParams ReposDeletePagesSitePathParams 
    
}

type ReposDeletePagesSite415ApplicationJSON struct {
    DocumentationURL string `json:"documentation_url"`
    Message string `json:"message"`
    
}

type ReposDeletePagesSiteResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    ReposDeletePagesSite415ApplicationJSONObject *ReposDeletePagesSite415ApplicationJSON 
    ValidationError *shared.ValidationError 
    
}

