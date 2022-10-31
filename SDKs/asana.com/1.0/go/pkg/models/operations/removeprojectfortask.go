package operations

import (
"openapi/pkg/models/shared")

type RemoveProjectForTaskPathParams struct {
    TaskGid string `pathParam:"style=simple,explode=false,name=task_gid"`
    
}

type RemoveProjectForTaskQueryParams struct {
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    
}

type RemoveProjectForTaskRequestBody struct {
    Data *shared.TaskRemoveProjectRequest `json:"data,omitempty"`
    
}

type RemoveProjectForTaskRequest struct {
    PathParams RemoveProjectForTaskPathParams 
    QueryParams RemoveProjectForTaskQueryParams 
    Request RemoveProjectForTaskRequestBody `request:"mediaType=application/json"`
    
}

type RemoveProjectForTask200ApplicationJSON struct {
    Data map[string]interface{} `json:"data,omitempty"`
    
}

type RemoveProjectForTaskResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    RemoveProjectForTask200ApplicationJSONObject *RemoveProjectForTask200ApplicationJSON 
    
}

