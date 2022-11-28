package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePortfolioQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type CreatePortfolioRequestBodyInput struct {
	Data *shared.PortfolioRequestInput `json:"data,omitempty"`
}

type CreatePortfolio201ApplicationJSON struct {
	Data *shared.PortfolioResponse `json:"data,omitempty"`
}

type CreatePortfolioRequest struct {
	QueryParams CreatePortfolioQueryParams
	Request     CreatePortfolioRequestBodyInput `request:"mediaType=application/json"`
}

type CreatePortfolioResponse struct {
	ContentType                             string
	ErrorResponse                           *shared.ErrorResponse
	StatusCode                              int64
	CreatePortfolio201ApplicationJSONObject *CreatePortfolio201ApplicationJSON
}
