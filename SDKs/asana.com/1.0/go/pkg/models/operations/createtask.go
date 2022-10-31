package operations

import (
"openapi/pkg/models/shared")

type CreateTaskQueryParams struct {
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    
}

type CreateTaskRequestBody struct {
    Data *shared.TaskRequest `json:"data,omitempty"`
    
}

type CreateTaskRequest struct {
    QueryParams CreateTaskQueryParams 
    Request CreateTaskRequestBody `request:"mediaType=application/json"`
    
}

type CreateTask201ApplicationJSON struct {
    Data *shared.TaskResponse `json:"data,omitempty"`
    
}

type CreateTaskResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    CreateTask201ApplicationJSONObject *CreateTask201ApplicationJSON 
    
}

