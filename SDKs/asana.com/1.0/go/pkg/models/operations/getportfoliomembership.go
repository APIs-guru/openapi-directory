package operations

import (
	"openapi/pkg/models/shared"
)

type GetPortfolioMembershipPathParams struct {
	PortfolioMembershipGid string `pathParam:"style=simple,explode=false,name=portfolio_membership_gid"`
}

type GetPortfolioMembershipQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetPortfolioMembership200ApplicationJSON struct {
	Data *shared.PortfolioMembershipResponse `json:"data,omitempty"`
}

type GetPortfolioMembershipRequest struct {
	PathParams  GetPortfolioMembershipPathParams
	QueryParams GetPortfolioMembershipQueryParams
}

type GetPortfolioMembershipResponse struct {
	ContentType                                    string
	ErrorResponse                                  *shared.ErrorResponse
	StatusCode                                     int64
	GetPortfolioMembership200ApplicationJSONObject *GetPortfolioMembership200ApplicationJSON
}
