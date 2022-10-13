package operations

import (
	"openapi/pkg/models/shared"
)

type GetPluginsNpmNameRegisteredSettingsPathParams struct {
	NpmName string `pathParam:"style=simple,explode=false,name=npmName"`
}

type GetPluginsNpmNameRegisteredSettingsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetPluginsNpmNameRegisteredSettingsRequest struct {
	PathParams GetPluginsNpmNameRegisteredSettingsPathParams
	Security   GetPluginsNpmNameRegisteredSettingsSecurity
}

type GetPluginsNpmNameRegisteredSettingsResponse struct {
	ContentType                                                 string
	GetPluginsNpmNameRegisteredSettings200ApplicationJSONObject map[string]interface{}
	StatusCode                                                  int64
}
