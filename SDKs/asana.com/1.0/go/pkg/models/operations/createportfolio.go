package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePortfolioQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type CreatePortfolioRequestBody struct {
	Data *shared.PortfolioRequest `json:"data"`
}

type CreatePortfolioRequest struct {
	QueryParams CreatePortfolioQueryParams
	Request     CreatePortfolioRequestBody `request:"mediaType=application/json"`
}

type CreatePortfolio201ApplicationJSON struct {
	Data *shared.PortfolioResponse `json:"data"`
}

type CreatePortfolioResponse struct {
	ContentType                             string
	ErrorResponse                           *shared.ErrorResponse
	StatusCode                              int64
	CreatePortfolio201ApplicationJSONObject *CreatePortfolio201ApplicationJSON
}
