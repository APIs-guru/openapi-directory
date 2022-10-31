package operations

import (
	"openapi/pkg/models/shared"
)

type GetItemsForPortfolioPathParams struct {
	PortfolioGid string `pathParam:"style=simple,explode=false,name=portfolio_gid"`
}

type GetItemsForPortfolioQueryParams struct {
	Limit     *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset    *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetItemsForPortfolioRequest struct {
	PathParams  GetItemsForPortfolioPathParams
	QueryParams GetItemsForPortfolioQueryParams
}

type GetItemsForPortfolio200ApplicationJSON struct {
	Data []shared.ProjectCompact `json:"data,omitempty"`
}

type GetItemsForPortfolioResponse struct {
	ContentType                                  string
	ErrorResponse                                *shared.ErrorResponse
	StatusCode                                   int64
	GetItemsForPortfolio200ApplicationJSONObject *GetItemsForPortfolio200ApplicationJSON
}
