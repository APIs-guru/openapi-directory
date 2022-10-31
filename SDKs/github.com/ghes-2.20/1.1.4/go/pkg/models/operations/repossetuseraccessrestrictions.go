package operations

import (
"openapi/pkg/models/shared")

type ReposSetUserAccessRestrictionsPathParams struct {
    Branch string `pathParam:"style=simple,explode=false,name=branch"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposSetUserAccessRestrictionsRequestBody1 struct {
    Users []string `json:"users"`
    
}

type ReposSetUserAccessRestrictionsRequest struct {
    PathParams ReposSetUserAccessRestrictionsPathParams 
    Request *interface{} `request:"mediaType=application/json"`
    
}

type ReposSetUserAccessRestrictionsResponse struct {
    ContentType string 
    StatusCode int64 
    SimpleUsers []shared.SimpleUser 
    ValidationError *shared.ValidationError 
    
}

