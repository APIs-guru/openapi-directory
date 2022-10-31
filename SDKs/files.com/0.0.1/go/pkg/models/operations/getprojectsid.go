package operations

import (
"openapi/pkg/models/shared")

type GetProjectsIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetProjectsIDRequest struct {
    PathParams GetProjectsIDPathParams 
    
}

type GetProjectsIDResponse struct {
    ContentType string 
    ProjectEntity *shared.ProjectEntity 
    StatusCode int64 
    
}

