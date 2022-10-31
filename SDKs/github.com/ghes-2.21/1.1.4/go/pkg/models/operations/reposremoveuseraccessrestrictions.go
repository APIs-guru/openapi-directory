package operations

import (
"openapi/pkg/models/shared")

type ReposRemoveUserAccessRestrictionsPathParams struct {
    Branch string `pathParam:"style=simple,explode=false,name=branch"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposRemoveUserAccessRestrictionsRequestBody1 struct {
    Users []string `json:"users"`
    
}

type ReposRemoveUserAccessRestrictionsRequest struct {
    PathParams ReposRemoveUserAccessRestrictionsPathParams 
    Request *interface{} `request:"mediaType=application/json"`
    
}

type ReposRemoveUserAccessRestrictionsResponse struct {
    ContentType string 
    StatusCode int64 
    SimpleUsers []shared.SimpleUser 
    ValidationError *shared.ValidationError 
    
}

