package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamsForUserPathParams struct {
	UserGid string `pathParam:"style=simple,explode=false,name=user_gid"`
}

type GetTeamsForUserQueryParams struct {
	Limit        *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset       *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields    []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty    *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
	Organization string   `queryParam:"style=form,explode=true,name=organization"`
}

type GetTeamsForUserRequest struct {
	PathParams  GetTeamsForUserPathParams
	QueryParams GetTeamsForUserQueryParams
}

type GetTeamsForUser200ApplicationJSON struct {
	Data []shared.TeamCompact `json:"data,omitempty"`
}

type GetTeamsForUserResponse struct {
	ContentType                             string
	ErrorResponse                           *shared.ErrorResponse
	StatusCode                              int64
	GetTeamsForUser200ApplicationJSONObject *GetTeamsForUser200ApplicationJSON
}
