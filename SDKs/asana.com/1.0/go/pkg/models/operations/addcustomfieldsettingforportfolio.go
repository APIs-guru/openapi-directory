package operations

import (
"openapi/pkg/models/shared")

type AddCustomFieldSettingForPortfolioPathParams struct {
    PortfolioGid string `pathParam:"style=simple,explode=false,name=portfolio_gid"`
    
}

type AddCustomFieldSettingForPortfolioQueryParams struct {
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    
}

type AddCustomFieldSettingForPortfolioRequestBody struct {
    Data *shared.AddCustomFieldSettingRequest `json:"data,omitempty"`
    
}

type AddCustomFieldSettingForPortfolioRequest struct {
    PathParams AddCustomFieldSettingForPortfolioPathParams 
    QueryParams AddCustomFieldSettingForPortfolioQueryParams 
    Request AddCustomFieldSettingForPortfolioRequestBody `request:"mediaType=application/json"`
    
}

type AddCustomFieldSettingForPortfolio200ApplicationJSON struct {
    Data map[string]interface{} `json:"data,omitempty"`
    
}

type AddCustomFieldSettingForPortfolioResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    AddCustomFieldSettingForPortfolio200ApplicationJSONObject *AddCustomFieldSettingForPortfolio200ApplicationJSON 
    
}

