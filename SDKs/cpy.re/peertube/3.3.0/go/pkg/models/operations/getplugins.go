package operations

import (
"openapi/pkg/models/shared")

type GetPluginsQueryParams struct {
    Count *int64 `queryParam:"style=form,explode=true,name=count"`
    PluginType *int64 `queryParam:"style=form,explode=true,name=pluginType"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    Start *int64 `queryParam:"style=form,explode=true,name=start"`
    Uninstalled *bool `queryParam:"style=form,explode=true,name=uninstalled"`
    
}

type GetPluginsSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type GetPluginsRequest struct {
    QueryParams GetPluginsQueryParams 
    Security GetPluginsSecurity 
    
}

type GetPluginsResponse struct {
    ContentType string 
    PluginResponse *interface{} 
    StatusCode int64 
    
}

