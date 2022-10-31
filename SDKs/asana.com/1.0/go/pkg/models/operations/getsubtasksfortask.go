package operations

import (
"openapi/pkg/models/shared")

type GetSubtasksForTaskPathParams struct {
    TaskGid string `pathParam:"style=simple,explode=false,name=task_gid"`
    
}

type GetSubtasksForTaskQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    
}

type GetSubtasksForTaskRequest struct {
    PathParams GetSubtasksForTaskPathParams 
    QueryParams GetSubtasksForTaskQueryParams 
    
}

type GetSubtasksForTask200ApplicationJSON struct {
    Data []shared.TaskCompact `json:"data,omitempty"`
    
}

type GetSubtasksForTaskResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    GetSubtasksForTask200ApplicationJSONObject *GetSubtasksForTask200ApplicationJSON 
    
}

