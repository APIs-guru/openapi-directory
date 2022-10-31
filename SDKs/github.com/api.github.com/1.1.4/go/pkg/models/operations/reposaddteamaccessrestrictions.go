package operations

import (
"openapi/pkg/models/shared")

type ReposAddTeamAccessRestrictionsPathParams struct {
    Branch string `pathParam:"style=simple,explode=false,name=branch"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposAddTeamAccessRestrictionsRequestBody struct {
    Teams []string `json:"teams"`
    
}

type ReposAddTeamAccessRestrictionsRequest struct {
    PathParams ReposAddTeamAccessRestrictionsPathParams 
    Request *ReposAddTeamAccessRestrictionsRequestBody `request:"mediaType=application/json"`
    
}

type ReposAddTeamAccessRestrictionsResponse struct {
    ContentType string 
    StatusCode int64 
    Teams []shared.Team 
    ValidationError *shared.ValidationError 
    
}

