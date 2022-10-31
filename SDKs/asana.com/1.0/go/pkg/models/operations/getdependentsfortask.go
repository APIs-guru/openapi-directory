package operations

import (
"openapi/pkg/models/shared")

type GetDependentsForTaskPathParams struct {
    TaskGid string `pathParam:"style=simple,explode=false,name=task_gid"`
    
}

type GetDependentsForTaskQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    
}

type GetDependentsForTaskRequest struct {
    PathParams GetDependentsForTaskPathParams 
    QueryParams GetDependentsForTaskQueryParams 
    
}

type GetDependentsForTask200ApplicationJSON struct {
    Data []shared.TaskCompact `json:"data,omitempty"`
    
}

type GetDependentsForTaskResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    GetDependentsForTask200ApplicationJSONObject *GetDependentsForTask200ApplicationJSON 
    
}

