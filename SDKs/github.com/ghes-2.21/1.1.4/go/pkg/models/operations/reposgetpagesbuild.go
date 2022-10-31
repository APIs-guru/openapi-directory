package operations

import (
"openapi/pkg/models/shared")

type ReposGetPagesBuildPathParams struct {
    BuildID int64 `pathParam:"style=simple,explode=false,name=build_id"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposGetPagesBuildRequest struct {
    PathParams ReposGetPagesBuildPathParams 
    
}

type ReposGetPagesBuildResponse struct {
    ContentType string 
    StatusCode int64 
    PageBuild *shared.PageBuild 
    
}

