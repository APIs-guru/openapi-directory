package operations

import (
	"openapi/pkg/models/shared"
)

type GetAddonLinkersLinkerKeyPathParams struct {
	LinkerKey string `pathParam:"style=simple,explode=false,name=linker_key"`
}

type GetAddonLinkersLinkerKeySecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
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
