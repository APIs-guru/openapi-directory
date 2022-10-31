package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamsForOrganizationPathParams struct {
	WorkspaceGid string `pathParam:"style=simple,explode=false,name=workspace_gid"`
}

type GetTeamsForOrganizationQueryParams struct {
	Limit     *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset    *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetTeamsForOrganizationRequest struct {
	PathParams  GetTeamsForOrganizationPathParams
	QueryParams GetTeamsForOrganizationQueryParams
}

type GetTeamsForOrganization200ApplicationJSON struct {
	Data []shared.TeamCompact `json:"data,omitempty"`
}

type GetTeamsForOrganizationResponse struct {
	ContentType                                     string
	ErrorResponse                                   *shared.ErrorResponse
	StatusCode                                      int64
	GetTeamsForOrganization200ApplicationJSONObject *GetTeamsForOrganization200ApplicationJSON
}
