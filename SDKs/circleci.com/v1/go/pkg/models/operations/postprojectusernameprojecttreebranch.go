package operations

import (
"openapi/pkg/models/shared")

type PostProjectUsernameProjectTreeBranchPathParams struct {
    Branch string `pathParam:"style=simple,explode=false,name=branch"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type PostProjectUsernameProjectTreeBranchRequestBody struct {
    BuildParameters map[string]interface{} `json:"build_parameters,omitempty"`
    Parallel *string `json:"parallel,omitempty"`
    Revision *string `json:"revision,omitempty"`
    
}

type PostProjectUsernameProjectTreeBranchRequest struct {
    PathParams PostProjectUsernameProjectTreeBranchPathParams 
    Request *PostProjectUsernameProjectTreeBranchRequestBody `request:"mediaType=application/json"`
    
}

type PostProjectUsernameProjectTreeBranchResponse struct {
    Build *shared.Build 
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

