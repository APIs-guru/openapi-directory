package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveDependentsForTaskPathParams struct {
	TaskGid string `pathParam:"style=simple,explode=false,name=task_gid"`
}

type RemoveDependentsForTaskQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type RemoveDependentsForTaskRequestBody struct {
	Data *shared.ModifyDependentsRequest `json:"data"`
}

type RemoveDependentsForTaskRequest struct {
	PathParams  RemoveDependentsForTaskPathParams
	QueryParams RemoveDependentsForTaskQueryParams
	Request     RemoveDependentsForTaskRequestBody `request:"mediaType=application/json"`
}

type RemoveDependentsForTask200ApplicationJSON struct {
	Data []map[string]interface{} `json:"data"`
}

type RemoveDependentsForTaskResponse struct {
	ContentType                                     string
	ErrorResponse                                   *shared.ErrorResponse
	StatusCode                                      int64
	RemoveDependentsForTask200ApplicationJSONObject *RemoveDependentsForTask200ApplicationJSON
}
