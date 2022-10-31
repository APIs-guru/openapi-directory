package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkspacesQueryParams struct {
	Limit     *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset    *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetWorkspacesRequest struct {
	QueryParams GetWorkspacesQueryParams
}

type GetWorkspaces200ApplicationJSON struct {
	Data []shared.WorkspaceCompact `json:"data,omitempty"`
}

type GetWorkspacesResponse struct {
	ContentType                           string
	ErrorResponse                         *shared.ErrorResponse
	StatusCode                            int64
	GetWorkspaces200ApplicationJSONObject *GetWorkspaces200ApplicationJSON
}
