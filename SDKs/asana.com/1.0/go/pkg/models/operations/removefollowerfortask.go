package operations

import (
"openapi/pkg/models/shared")

type RemoveFollowerForTaskPathParams struct {
    TaskGid string `pathParam:"style=simple,explode=false,name=task_gid"`
    
}

type RemoveFollowerForTaskQueryParams struct {
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    
}

type RemoveFollowerForTaskRequestBody struct {
    Data *shared.TaskRemoveFollowersRequest `json:"data,omitempty"`
    
}

type RemoveFollowerForTaskRequest struct {
    PathParams RemoveFollowerForTaskPathParams 
    QueryParams RemoveFollowerForTaskQueryParams 
    Request RemoveFollowerForTaskRequestBody `request:"mediaType=application/json"`
    
}

type RemoveFollowerForTask200ApplicationJSON struct {
    Data map[string]interface{} `json:"data,omitempty"`
    
}

type RemoveFollowerForTaskResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    RemoveFollowerForTask200ApplicationJSONObject *RemoveFollowerForTask200ApplicationJSON 
    
}

