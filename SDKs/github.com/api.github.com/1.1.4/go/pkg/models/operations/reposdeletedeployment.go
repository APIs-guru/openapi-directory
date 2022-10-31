package operations

import (
"openapi/pkg/models/shared")

type ReposDeleteDeploymentPathParams struct {
    DeploymentID int64 `pathParam:"style=simple,explode=false,name=deployment_id"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposDeleteDeploymentRequest struct {
    PathParams ReposDeleteDeploymentPathParams 
    
}

type ReposDeleteDeploymentResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    ValidationErrorSimple *shared.ValidationErrorSimple 
    
}

