package operations

import (
"openapi/pkg/models/shared")

type ProjectsMoveColumnPathParams struct {
    ColumnID int64 `pathParam:"style=simple,explode=false,name=column_id"`
    
}

type ProjectsMoveColumnRequestBody struct {
    Position string `json:"position"`
    
}

type ProjectsMoveColumnRequest struct {
    PathParams ProjectsMoveColumnPathParams 
    Request *ProjectsMoveColumnRequestBody `request:"mediaType=application/json"`
    
}

type ProjectsMoveColumnResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    ProjectsMoveColumn201ApplicationJSONObject map[string]interface{} 
    ValidationErrorSimple *shared.ValidationErrorSimple 
    
}

