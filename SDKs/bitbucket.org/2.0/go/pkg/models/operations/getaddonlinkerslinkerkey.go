package operations

import (
	"openapi/pkg/models/shared"
)

type GetAddonLinkersLinkerKeyPathParams struct {
	LinkerKey string `pathParam:"style=simple,explode=false,name=linker_key"`
}

type GetAddonLinkersLinkerKeySecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetAddonLinkersLinkerKeySecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type GetAddonLinkersLinkerKeySecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetAddonLinkersLinkerKeySecurity struct {
	Option1 *GetAddonLinkersLinkerKeySecurityOption1 `security:"option"`
	Option2 *GetAddonLinkersLinkerKeySecurityOption2 `security:"option"`
	Option3 *GetAddonLinkersLinkerKeySecurityOption3 `security:"option"`
}

type GetAddonLinkersLinkerKeyRequest struct {
	PathParams GetAddonLinkersLinkerKeyPathParams
	Security   GetAddonLinkersLinkerKeySecurity
}

type GetAddonLinkersLinkerKeyResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
