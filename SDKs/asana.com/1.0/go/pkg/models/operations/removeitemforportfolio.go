package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveItemForPortfolioPathParams struct {
	PortfolioGid string `pathParam:"style=simple,explode=false,name=portfolio_gid"`
}

type RemoveItemForPortfolioQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type RemoveItemForPortfolioRequestBody struct {
	Data *shared.PortfolioRemoveItemRequest `json:"data"`
}

type RemoveItemForPortfolioRequest struct {
	PathParams  RemoveItemForPortfolioPathParams
	QueryParams RemoveItemForPortfolioQueryParams
	Request     RemoveItemForPortfolioRequestBody `request:"mediaType=application/json"`
}

type RemoveItemForPortfolio200ApplicationJSON struct {
	Data map[string]interface{} `json:"data"`
}

type RemoveItemForPortfolioResponse struct {
	ContentType                                    string
	ErrorResponse                                  *shared.ErrorResponse
	StatusCode                                     int64
	RemoveItemForPortfolio200ApplicationJSONObject *RemoveItemForPortfolio200ApplicationJSON
}
