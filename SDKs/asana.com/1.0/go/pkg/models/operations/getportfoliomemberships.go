package operations

import (
	"openapi/pkg/models/shared"
)

type GetPortfolioMembershipsQueryParams struct {
	Limit     *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset    *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
	Portfolio *string  `queryParam:"style=form,explode=true,name=portfolio"`
	User      *string  `queryParam:"style=form,explode=true,name=user"`
	Workspace *string  `queryParam:"style=form,explode=true,name=workspace"`
}

type GetPortfolioMembershipsRequest struct {
	QueryParams GetPortfolioMembershipsQueryParams
}

type GetPortfolioMemberships200ApplicationJSON struct {
	Data []shared.PortfolioMembershipCompact `json:"data,omitempty"`
}

type GetPortfolioMembershipsResponse struct {
	ContentType                                     string
	ErrorResponse                                   *shared.ErrorResponse
	StatusCode                                      int64
	GetPortfolioMemberships200ApplicationJSONObject *GetPortfolioMemberships200ApplicationJSON
}
