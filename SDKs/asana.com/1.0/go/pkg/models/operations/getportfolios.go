package operations

import (
"openapi/pkg/models/shared")

type GetPortfoliosQueryParams struct {
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *string `queryParam:"style=form,explode=true,name=offset"`
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    Owner string `queryParam:"style=form,explode=true,name=owner"`
    Workspace string `queryParam:"style=form,explode=true,name=workspace"`
    
}

type GetPortfoliosRequest struct {
    QueryParams GetPortfoliosQueryParams 
    
}

type GetPortfolios200ApplicationJSON struct {
    Data []shared.PortfolioCompact `json:"data,omitempty"`
    
}

type GetPortfoliosResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    GetPortfolios200ApplicationJSONObject *GetPortfolios200ApplicationJSON 
    
}

