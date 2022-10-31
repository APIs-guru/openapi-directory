package operations

import (
"openapi/pkg/models/shared")

type AddDependentsForTaskPathParams struct {
    TaskGid string `pathParam:"style=simple,explode=false,name=task_gid"`
    
}

type AddDependentsForTaskQueryParams struct {
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    
}

type AddDependentsForTaskRequestBody struct {
    Data *shared.ModifyDependentsRequest `json:"data,omitempty"`
    
}

type AddDependentsForTaskRequest struct {
    PathParams AddDependentsForTaskPathParams 
    QueryParams AddDependentsForTaskQueryParams 
    Request AddDependentsForTaskRequestBody `request:"mediaType=application/json"`
    
}

type AddDependentsForTask200ApplicationJSON struct {
    Data []shared.TaskCompact `json:"data,omitempty"`
    
}

type AddDependentsForTaskResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    AddDependentsForTask200ApplicationJSONObject *AddDependentsForTask200ApplicationJSON 
    
}

