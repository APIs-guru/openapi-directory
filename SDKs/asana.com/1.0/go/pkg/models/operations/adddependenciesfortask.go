package operations

import (
	"openapi/pkg/models/shared"
)

type AddDependenciesForTaskPathParams struct {
	TaskGid string `pathParam:"style=simple,explode=false,name=task_gid"`
}

type AddDependenciesForTaskQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type AddDependenciesForTaskRequestBody struct {
	Data *shared.ModifyDependenciesRequest `json:"data,omitempty"`
}

type AddDependenciesForTask200ApplicationJSON struct {
	Data map[string]interface{} `json:"data,omitempty"`
}

type AddDependenciesForTaskRequest struct {
	PathParams  AddDependenciesForTaskPathParams
	QueryParams AddDependenciesForTaskQueryParams
	Request     AddDependenciesForTaskRequestBody `request:"mediaType=application/json"`
}

type AddDependenciesForTaskResponse struct {
	ContentType                                    string
	ErrorResponse                                  *shared.ErrorResponse
	StatusCode                                     int64
	AddDependenciesForTask200ApplicationJSONObject *AddDependenciesForTask200ApplicationJSON
}
