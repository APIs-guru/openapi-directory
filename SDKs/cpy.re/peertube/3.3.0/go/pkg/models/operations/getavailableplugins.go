package operations

import (
	"openapi/pkg/models/shared"
)

type GetAvailablePluginsQueryParams struct {
	Count                 *int64  `queryParam:"style=form,explode=true,name=count"`
	CurrentPeerTubeEngine *string `queryParam:"style=form,explode=true,name=currentPeerTubeEngine"`
	PluginType            *int64  `queryParam:"style=form,explode=true,name=pluginType"`
	Search                *string `queryParam:"style=form,explode=true,name=search"`
	Sort                  *string `queryParam:"style=form,explode=true,name=sort"`
	Start                 *int64  `queryParam:"style=form,explode=true,name=start"`
}

type GetAvailablePluginsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetAvailablePluginsRequest struct {
	QueryParams GetAvailablePluginsQueryParams
	Security    GetAvailablePluginsSecurity
}

type GetAvailablePluginsResponse struct {
	ContentType    string
	PluginResponse *interface{}
	StatusCode     int64
}
