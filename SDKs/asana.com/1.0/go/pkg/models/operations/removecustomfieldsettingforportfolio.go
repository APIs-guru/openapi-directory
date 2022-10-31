package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveCustomFieldSettingForPortfolioPathParams struct {
	PortfolioGid string `pathParam:"style=simple,explode=false,name=portfolio_gid"`
}

type RemoveCustomFieldSettingForPortfolioQueryParams struct {
	OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type RemoveCustomFieldSettingForPortfolioRequestBody struct {
	Data *shared.RemoveCustomFieldSettingRequest `json:"data,omitempty"`
}

type RemoveCustomFieldSettingForPortfolioRequest struct {
	PathParams  RemoveCustomFieldSettingForPortfolioPathParams
	QueryParams RemoveCustomFieldSettingForPortfolioQueryParams
	Request     RemoveCustomFieldSettingForPortfolioRequestBody `request:"mediaType=application/json"`
}

type RemoveCustomFieldSettingForPortfolio200ApplicationJSON struct {
	Data map[string]interface{} `json:"data,omitempty"`
}

type RemoveCustomFieldSettingForPortfolioResponse struct {
	ContentType                                                  string
	ErrorResponse                                                *shared.ErrorResponse
	StatusCode                                                   int64
	RemoveCustomFieldSettingForPortfolio200ApplicationJSONObject *RemoveCustomFieldSettingForPortfolio200ApplicationJSON
}
