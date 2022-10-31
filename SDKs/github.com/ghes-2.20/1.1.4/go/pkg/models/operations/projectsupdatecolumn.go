package operations

import (
"openapi/pkg/models/shared")

type ProjectsUpdateColumnPathParams struct {
    ColumnID int64 `pathParam:"style=simple,explode=false,name=column_id"`
    
}

type ProjectsUpdateColumnRequestBody struct {
    Name string `json:"name"`
    
}

type ProjectsUpdateColumnRequest struct {
    PathParams ProjectsUpdateColumnPathParams 
    Request *ProjectsUpdateColumnRequestBody `request:"mediaType=application/json"`
    
}

type ProjectsUpdateColumnResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    ProjectColumn *shared.ProjectColumn 
    
}

