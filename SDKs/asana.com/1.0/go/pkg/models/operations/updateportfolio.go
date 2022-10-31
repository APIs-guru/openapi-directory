package operations

import (
"openapi/pkg/models/shared")

type UpdatePortfolioPathParams struct {
    PortfolioGid string `pathParam:"style=simple,explode=false,name=portfolio_gid"`
    
}

type UpdatePortfolioQueryParams struct {
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    
}

type UpdatePortfolioRequestBody struct {
    Data *shared.PortfolioRequest `json:"data,omitempty"`
    
}

type UpdatePortfolioRequest struct {
    PathParams UpdatePortfolioPathParams 
    QueryParams UpdatePortfolioQueryParams 
    Request UpdatePortfolioRequestBody `request:"mediaType=application/json"`
    
}

type UpdatePortfolio200ApplicationJSON struct {
    Data *shared.PortfolioResponse `json:"data,omitempty"`
    
}

type UpdatePortfolioResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    UpdatePortfolio200ApplicationJSONObject *UpdatePortfolio200ApplicationJSON 
    
}

