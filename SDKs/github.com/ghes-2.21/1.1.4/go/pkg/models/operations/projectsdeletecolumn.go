package operations

import (
"openapi/pkg/models/shared")

type ProjectsDeleteColumnPathParams struct {
    ColumnID int64 `pathParam:"style=simple,explode=false,name=column_id"`
    
}

type ProjectsDeleteColumnRequest struct {
    PathParams ProjectsDeleteColumnPathParams 
    
}

type ProjectsDeleteColumnResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    
}

