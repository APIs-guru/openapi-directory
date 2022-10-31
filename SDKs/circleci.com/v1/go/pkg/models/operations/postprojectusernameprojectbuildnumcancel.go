package operations

import (
"openapi/pkg/models/shared")

type PostProjectUsernameProjectBuildNumCancelPathParams struct {
    BuildNum int64 `pathParam:"style=simple,explode=false,name=build_num"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type PostProjectUsernameProjectBuildNumCancelRequest struct {
    PathParams PostProjectUsernameProjectBuildNumCancelPathParams 
    
}

type PostProjectUsernameProjectBuildNumCancelResponse struct {
    Build *shared.Build 
    ContentType string 
    StatusCode int64 
    
}

