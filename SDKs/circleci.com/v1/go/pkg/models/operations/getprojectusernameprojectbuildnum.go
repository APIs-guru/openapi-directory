package operations

import (
"openapi/pkg/models/shared")

type GetProjectUsernameProjectBuildNumPathParams struct {
    BuildNum int64 `pathParam:"style=simple,explode=false,name=build_num"`
    Project string `pathParam:"style=simple,explode=false,name=project"`
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type GetProjectUsernameProjectBuildNumRequest struct {
    PathParams GetProjectUsernameProjectBuildNumPathParams 
    
}

type GetProjectUsernameProjectBuildNumResponse struct {
    BuildDetail *shared.BuildDetail 
    ContentType string 
    StatusCode int64 
    
}

