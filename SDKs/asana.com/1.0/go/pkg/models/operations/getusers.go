package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersQueryParams struct {
	Limit     *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset    *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
	Team      *string  `queryParam:"style=form,explode=true,name=team"`
	Workspace *string  `queryParam:"style=form,explode=true,name=workspace"`
}

type GetUsersRequest struct {
	QueryParams GetUsersQueryParams
}

type GetUsers200ApplicationJSON struct {
	Data []shared.UserCompact `json:"data"`
}

type GetUsersResponse struct {
	ContentType                      string
	ErrorResponse                    *shared.ErrorResponse
	StatusCode                       int64
	GetUsers200ApplicationJSONObject *GetUsers200ApplicationJSON
}
