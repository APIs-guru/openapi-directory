package operations

import (
	"openapi/pkg/models/shared"
)

type AddItemForPortfolioPathParams struct {
	PortfolioGid string `pathParam:"style=simple,explode=false,name=portfolio_gid"`
}

type AddItemForPortfolioQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type AddItemForPortfolioRequestBody struct {
	Data *shared.PortfolioAddItemRequest `json:"data"`
}

type AddItemForPortfolioRequest struct {
	PathParams  AddItemForPortfolioPathParams
	QueryParams AddItemForPortfolioQueryParams
	Request     AddItemForPortfolioRequestBody `request:"mediaType=application/json"`
}

type AddItemForPortfolio200ApplicationJSON struct {
	Data map[string]interface{} `json:"data"`
}

type AddItemForPortfolioResponse struct {
	ContentType                                 string
	ErrorResponse                               *shared.ErrorResponse
	StatusCode                                  int64
	AddItemForPortfolio200ApplicationJSONObject *AddItemForPortfolio200ApplicationJSON
}
