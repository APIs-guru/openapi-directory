package operations

import (
	"openapi/pkg/models/shared"
)

type GetPortfolioPathParams struct {
	PortfolioGid string `pathParam:"style=simple,explode=false,name=portfolio_gid"`
}

type GetPortfolioQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetPortfolio200ApplicationJSON struct {
	Data *shared.PortfolioResponse `json:"data,omitempty"`
}

type GetPortfolioRequest struct {
	PathParams  GetPortfolioPathParams
	QueryParams GetPortfolioQueryParams
}

type GetPortfolioResponse struct {
	ContentType                          string
	ErrorResponse                        *shared.ErrorResponse
	StatusCode                           int64
	GetPortfolio200ApplicationJSONObject *GetPortfolio200ApplicationJSON
}
