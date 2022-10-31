package operations

import (
"openapi/pkg/models/shared")

type GetTasksForUserTaskListPathParams struct {
    UserTaskListGid string `pathParam:"style=simple,explode=false,name=user_task_list_gid"`
    
}

type GetTasksForUserTaskListQueryParams struct {
    CompletedSince *string `queryParam:"style=form,explode=true,name=completed_since"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    
}

type GetTasksForUserTaskListRequest struct {
    PathParams GetTasksForUserTaskListPathParams 
    QueryParams GetTasksForUserTaskListQueryParams 
    
}

type GetTasksForUserTaskList200ApplicationJSON struct {
    Data []shared.TaskCompact `json:"data,omitempty"`
    
}

type GetTasksForUserTaskListResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    GetTasksForUserTaskList200ApplicationJSONObject *GetTasksForUserTaskList200ApplicationJSON 
    
}

