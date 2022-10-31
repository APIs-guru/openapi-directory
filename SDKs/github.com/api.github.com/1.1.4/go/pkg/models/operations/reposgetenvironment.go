package operations

import (
"openapi/pkg/models/shared")

type ReposGetEnvironmentPathParams struct {
    EnvironmentName string `pathParam:"style=simple,explode=false,name=environment_name"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposGetEnvironmentRequest struct {
    PathParams ReposGetEnvironmentPathParams 
    
}

type ReposGetEnvironmentResponse struct {
    ContentType string 
    StatusCode int64 
    Environment *shared.Environment 
    
}

