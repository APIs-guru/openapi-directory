package operations

import (
	"openapi/pkg/models/shared"
)

type GetCustomFieldSettingsForPortfolioPathParams struct {
	PortfolioGid string `pathParam:"style=simple,explode=false,name=portfolio_gid"`
}

type GetCustomFieldSettingsForPortfolioQueryParams struct {
	Limit     *int64   `queryParam:"style=form,explode=true,name=limit"`
	Offset    *string  `queryParam:"style=form,explode=true,name=offset"`
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetCustomFieldSettingsForPortfolioRequest struct {
	PathParams  GetCustomFieldSettingsForPortfolioPathParams
	QueryParams GetCustomFieldSettingsForPortfolioQueryParams
}

type GetCustomFieldSettingsForPortfolio200ApplicationJSON struct {
	Data []shared.CustomFieldSettingResponse `json:"data,omitempty"`
}

type GetCustomFieldSettingsForPortfolioResponse struct {
	ContentType                                                string
	ErrorResponse                                              *shared.ErrorResponse
	StatusCode                                                 int64
	GetCustomFieldSettingsForPortfolio200ApplicationJSONObject *GetCustomFieldSettingsForPortfolio200ApplicationJSON
}
