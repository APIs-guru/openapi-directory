package operations

import (
	"openapi/pkg/models/shared"
)

type AddMembersForPortfolioPathParams struct {
	PortfolioGid string `pathParam:"style=simple,explode=false,name=portfolio_gid"`
}

type AddMembersForPortfolioQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type AddMembersForPortfolioRequestBody struct {
	Data *shared.AddMembersRequest `json:"data,omitempty"`
}

type AddMembersForPortfolio200ApplicationJSON struct {
	Data map[string]interface{} `json:"data,omitempty"`
}

type AddMembersForPortfolioRequest struct {
	PathParams  AddMembersForPortfolioPathParams
	QueryParams AddMembersForPortfolioQueryParams
	Request     AddMembersForPortfolioRequestBody `request:"mediaType=application/json"`
}

type AddMembersForPortfolioResponse struct {
	ContentType                                    string
	ErrorResponse                                  *shared.ErrorResponse
	StatusCode                                     int64
	AddMembersForPortfolio200ApplicationJSONObject *AddMembersForPortfolio200ApplicationJSON
}
