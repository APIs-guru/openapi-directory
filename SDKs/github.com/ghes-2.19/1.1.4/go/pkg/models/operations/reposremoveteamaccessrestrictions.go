package operations

import (
"openapi/pkg/models/shared")

type ReposRemoveTeamAccessRestrictionsPathParams struct {
    Branch string `pathParam:"style=simple,explode=false,name=branch"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposRemoveTeamAccessRestrictionsRequestBody1 struct {
    Teams []string `json:"teams"`
    
}

type ReposRemoveTeamAccessRestrictionsRequest struct {
    PathParams ReposRemoveTeamAccessRestrictionsPathParams 
    Request *interface{} `request:"mediaType=application/json"`
    
}

type ReposRemoveTeamAccessRestrictionsResponse struct {
    ContentType string 
    StatusCode int64 
    Teams []shared.Team 
    ValidationError *shared.ValidationError 
    
}

