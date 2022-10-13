package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveMembersForPortfolioPathParams struct {
	PortfolioGid string `pathParam:"style=simple,explode=false,name=portfolio_gid"`
}

type RemoveMembersForPortfolioQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type RemoveMembersForPortfolioRequestBody struct {
	Data *shared.RemoveMembersRequest `json:"data"`
}

type RemoveMembersForPortfolioRequest struct {
	PathParams  RemoveMembersForPortfolioPathParams
	QueryParams RemoveMembersForPortfolioQueryParams
	Request     RemoveMembersForPortfolioRequestBody `request:"mediaType=application/json"`
}

type RemoveMembersForPortfolio200ApplicationJSON struct {
	Data map[string]interface{} `json:"data"`
}

type RemoveMembersForPortfolioResponse struct {
	ContentType                                       string
	ErrorResponse                                     *shared.ErrorResponse
	StatusCode                                        int64
	RemoveMembersForPortfolio200ApplicationJSONObject *RemoveMembersForPortfolio200ApplicationJSON
}
