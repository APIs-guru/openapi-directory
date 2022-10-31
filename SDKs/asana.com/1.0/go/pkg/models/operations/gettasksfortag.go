package operations

import (
"openapi/pkg/models/shared")

type GetTasksForTagPathParams struct {
    TagGid string `pathParam:"style=simple,explode=false,name=tag_gid"`
    
}

type GetTasksForTagQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    
}

type GetTasksForTagRequest struct {
    PathParams GetTasksForTagPathParams 
    QueryParams GetTasksForTagQueryParams 
    
}

type GetTasksForTag200ApplicationJSON struct {
    Data []shared.TaskCompact `json:"data,omitempty"`
    
}

type GetTasksForTagResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    GetTasksForTag200ApplicationJSONObject *GetTasksForTag200ApplicationJSON 
    
}

