package operations

import (
"openapi/pkg/models/shared")

type ReposGetAllEnvironmentsPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposGetAllEnvironmentsRequest struct {
    PathParams ReposGetAllEnvironmentsPathParams 
    
}

type ReposGetAllEnvironments200ApplicationJSON struct {
    Environments []shared.Environment `json:"environments,omitempty"`
    TotalCount *int64 `json:"total_count,omitempty"`
    
}

type ReposGetAllEnvironmentsResponse struct {
    ContentType string 
    StatusCode int64 
    ReposGetAllEnvironments200ApplicationJSONObject *ReposGetAllEnvironments200ApplicationJSON 
    
}

