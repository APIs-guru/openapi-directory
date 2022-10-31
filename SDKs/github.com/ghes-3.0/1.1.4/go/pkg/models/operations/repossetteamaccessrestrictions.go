package operations

import (
"openapi/pkg/models/shared")

type ReposSetTeamAccessRestrictionsPathParams struct {
    Branch string `pathParam:"style=simple,explode=false,name=branch"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposSetTeamAccessRestrictionsRequestBody1 struct {
    Teams []string `json:"teams"`
    
}

type ReposSetTeamAccessRestrictionsRequest struct {
    PathParams ReposSetTeamAccessRestrictionsPathParams 
    Request *interface{} `request:"mediaType=application/json"`
    
}

type ReposSetTeamAccessRestrictionsResponse struct {
    ContentType string 
    StatusCode int64 
    Teams []shared.Team 
    ValidationError *shared.ValidationError 
    
}

