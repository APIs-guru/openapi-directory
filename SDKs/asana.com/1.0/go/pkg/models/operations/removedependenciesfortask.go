package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveDependenciesForTaskPathParams struct {
	TaskGid string `pathParam:"style=simple,explode=false,name=task_gid"`
}

type RemoveDependenciesForTaskQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type RemoveDependenciesForTaskRequestBody struct {
	Data *shared.ModifyDependenciesRequest `json:"data,omitempty"`
}

type RemoveDependenciesForTaskRequest struct {
	PathParams  RemoveDependenciesForTaskPathParams
	QueryParams RemoveDependenciesForTaskQueryParams
	Request     RemoveDependenciesForTaskRequestBody `request:"mediaType=application/json"`
}

type RemoveDependenciesForTask200ApplicationJSON struct {
	Data []map[string]interface{} `json:"data,omitempty"`
}

type RemoveDependenciesForTaskResponse struct {
	ContentType                                       string
	ErrorResponse                                     *shared.ErrorResponse
	StatusCode                                        int64
	RemoveDependenciesForTask200ApplicationJSONObject *RemoveDependenciesForTask200ApplicationJSON
}
