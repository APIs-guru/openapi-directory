package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserPathParams struct {
	UserGid string `pathParam:"style=simple,explode=false,name=user_gid"`
}

type GetUserQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetUser200ApplicationJSON struct {
	Data *shared.UserResponse `json:"data,omitempty"`
}

type GetUserRequest struct {
	PathParams  GetUserPathParams
	QueryParams GetUserQueryParams
}

type GetUserResponse struct {
	ContentType                     string
	ErrorResponse                   *shared.ErrorResponse
	StatusCode                      int64
	GetUser200ApplicationJSONObject *GetUser200ApplicationJSON
}
