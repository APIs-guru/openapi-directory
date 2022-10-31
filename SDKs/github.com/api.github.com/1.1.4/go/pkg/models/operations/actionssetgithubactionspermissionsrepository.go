package operations

import (
"openapi/pkg/models/shared")

type ActionsSetGithubActionsPermissionsRepositoryPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ActionsSetGithubActionsPermissionsRepositoryRequestBody struct {
    AllowedActions *shared.AllowedActionsEnum `json:"allowed_actions,omitempty"`
    Enabled bool `json:"enabled"`
    
}

type ActionsSetGithubActionsPermissionsRepositoryRequest struct {
    PathParams ActionsSetGithubActionsPermissionsRepositoryPathParams 
    Request *ActionsSetGithubActionsPermissionsRepositoryRequestBody `request:"mediaType=application/json"`
    
}

type ActionsSetGithubActionsPermissionsRepositoryResponse struct {
    ContentType string 
    StatusCode int64 
    
}

