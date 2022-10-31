package operations

import (
"openapi/pkg/models/shared")

type ReposCreateDeployKeyPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposCreateDeployKeyRequestBody struct {
    Key string `json:"key"`
    ReadOnly *bool `json:"read_only,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

type ReposCreateDeployKeyRequest struct {
    PathParams ReposCreateDeployKeyPathParams 
    Request *ReposCreateDeployKeyRequestBody `request:"mediaType=application/json"`
    
}

type ReposCreateDeployKeyResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    DeployKey *shared.DeployKey 
    ValidationError *shared.ValidationError 
    
}

