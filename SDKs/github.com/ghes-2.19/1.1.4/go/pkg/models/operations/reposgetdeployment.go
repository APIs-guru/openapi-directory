package operations

import (
"openapi/pkg/models/shared")

type ReposGetDeploymentPathParams struct {
    DeploymentID int64 `pathParam:"style=simple,explode=false,name=deployment_id"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposGetDeploymentRequest struct {
    PathParams ReposGetDeploymentPathParams 
    
}

type ReposGetDeploymentResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    Deployment *shared.Deployment 
    
}

