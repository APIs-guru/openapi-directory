package operations

import (
	"openapi/pkg/models/shared"
)

type GetAddonLinkersLinkerKeyValuesPathParams struct {
	LinkerKey string `pathParam:"style=simple,explode=false,name=linker_key"`
}

type GetAddonLinkersLinkerKeyValuesSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetAddonLinkersLinkerKeyValuesSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetAddonLinkersLinkerKeyValuesSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetAddonLinkersLinkerKeyValuesSecurity struct {
	Option1 *GetAddonLinkersLinkerKeyValuesSecurityOption1 `security:"option"`
	Option2 *GetAddonLinkersLinkerKeyValuesSecurityOption2 `security:"option"`
	Option3 *GetAddonLinkersLinkerKeyValuesSecurityOption3 `security:"option"`
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
