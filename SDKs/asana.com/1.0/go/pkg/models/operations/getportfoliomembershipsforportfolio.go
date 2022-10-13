package operations

import (
	"openapi/pkg/models/shared"
)

type GetPortfolioMembershipsForPortfolioPathParams struct {
	PortfolioGid string `pathParam:"style=simple,explode=false,name=portfolio_gid"`
}

type GetPortfolioMembershipsForPortfolioQueryParams struct {
	Limit     *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset    *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
	User      *string  `queryParam:"style=form,explode=true,name=user"`
}

type GetPortfolioMembershipsForPortfolioRequest struct {
	PathParams  GetPortfolioMembershipsForPortfolioPathParams
	QueryParams GetPortfolioMembershipsForPortfolioQueryParams
}

type GetPortfolioMembershipsForPortfolio200ApplicationJSON struct {
	Data []shared.PortfolioMembershipCompact `json:"data"`
}

type GetPortfolioMembershipsForPortfolioResponse struct {
	ContentType                                                 string
	ErrorResponse                                               *shared.ErrorResponse
	StatusCode                                                  int64
	GetPortfolioMembershipsForPortfolio200ApplicationJSONObject *GetPortfolioMembershipsForPortfolio200ApplicationJSON
}
