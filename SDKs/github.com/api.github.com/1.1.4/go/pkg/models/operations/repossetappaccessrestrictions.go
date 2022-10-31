package operations

import (
"openapi/pkg/models/shared")

type ReposSetAppAccessRestrictionsPathParams struct {
    Branch string `pathParam:"style=simple,explode=false,name=branch"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposSetAppAccessRestrictionsRequestBody struct {
    Apps []string `json:"apps"`
    
}

type ReposSetAppAccessRestrictionsRequest struct {
    PathParams ReposSetAppAccessRestrictionsPathParams 
    Request *ReposSetAppAccessRestrictionsRequestBody `request:"mediaType=application/json"`
    
}

type ReposSetAppAccessRestrictionsResponse struct {
    ContentType string 
    StatusCode int64 
    Integrations []map[string]interface{} 
    ValidationError *shared.ValidationError 
    
}

