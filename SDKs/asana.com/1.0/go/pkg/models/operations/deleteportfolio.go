package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePortfolioPathParams struct {
	PortfolioGid string `pathParam:"style=simple,explode=false,name=portfolio_gid"`
}

type DeletePortfolioQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type DeletePortfolio200ApplicationJSON struct {
	Data map[string]interface{} `json:"data,omitempty"`
}

type DeletePortfolioRequest struct {
	PathParams  DeletePortfolioPathParams
	QueryParams DeletePortfolioQueryParams
}

type DeletePortfolioResponse struct {
	ContentType                             string
	ErrorResponse                           *shared.ErrorResponse
	StatusCode                              int64
	DeletePortfolio200ApplicationJSONObject *DeletePortfolio200ApplicationJSON
}
