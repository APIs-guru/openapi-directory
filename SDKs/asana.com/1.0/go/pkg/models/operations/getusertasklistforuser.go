package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserTaskListForUserPathParams struct {
	UserGid string `pathParam:"style=simple,explode=false,name=user_gid"`
}

type GetUserTaskListForUserQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
	Workspace string   `queryParam:"style=form,explode=true,name=workspace"`
}

type GetUserTaskListForUserRequest struct {
	PathParams  GetUserTaskListForUserPathParams
	QueryParams GetUserTaskListForUserQueryParams
}

type GetUserTaskListForUser200ApplicationJSON struct {
	Data *shared.UserTaskListResponse `json:"data,omitempty"`
}

type GetUserTaskListForUserResponse struct {
	ContentType                                    string
	ErrorResponse                                  *shared.ErrorResponse
	StatusCode                                     int64
	GetUserTaskListForUser200ApplicationJSONObject *GetUserTaskListForUser200ApplicationJSON
}
