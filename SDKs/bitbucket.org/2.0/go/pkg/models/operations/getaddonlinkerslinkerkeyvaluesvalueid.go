package operations

import (
	"openapi/pkg/models/shared"
)

type GetAddonLinkersLinkerKeyValuesValueIDPathParams struct {
	LinkerKey string `pathParam:"style=simple,explode=false,name=linker_key"`
	ValueID   int64  `pathParam:"style=simple,explode=false,name=value_id"`
}

type GetAddonLinkersLinkerKeyValuesValueIDSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetAddonLinkersLinkerKeyValuesValueIDRequest struct {
	PathParams GetAddonLinkersLinkerKeyValuesValueIDPathParams
	Security   GetAddonLinkersLinkerKeyValuesValueIDSecurity
}

type GetAddonLinkersLinkerKeyValuesValueIDResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
