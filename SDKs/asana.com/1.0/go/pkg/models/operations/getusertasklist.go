package operations

import (
"openapi/pkg/models/shared")

type GetUserTaskListPathParams struct {
    UserTaskListGid string `pathParam:"style=simple,explode=false,name=user_task_list_gid"`
    
}

type GetUserTaskListQueryParams struct {
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    
}

type GetUserTaskListRequest struct {
    PathParams GetUserTaskListPathParams 
    QueryParams GetUserTaskListQueryParams 
    
}

type GetUserTaskList200ApplicationJSON struct {
    Data *shared.UserTaskListResponse `json:"data,omitempty"`
    
}

type GetUserTaskListResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    GetUserTaskList200ApplicationJSONObject *GetUserTaskList200ApplicationJSON 
    
}

