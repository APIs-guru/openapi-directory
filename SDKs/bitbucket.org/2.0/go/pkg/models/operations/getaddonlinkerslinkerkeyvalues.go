package operations

import (
	"openapi/pkg/models/shared"
)

type GetAddonLinkersLinkerKeyValuesPathParams struct {
	LinkerKey string `pathParam:"style=simple,explode=false,name=linker_key"`
}

type GetAddonLinkersLinkerKeyValuesSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetAddonLinkersLinkerKeyValuesRequest struct {
	PathParams GetAddonLinkersLinkerKeyValuesPathParams
	Security   GetAddonLinkersLinkerKeyValuesSecurity
}

type GetAddonLinkersLinkerKeyValuesResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
