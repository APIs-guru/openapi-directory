package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAddonLinkersLinkerKeyValuesPathParams struct {
	LinkerKey string `pathParam:"style=simple,explode=false,name=linker_key"`
}

type DeleteAddonLinkersLinkerKeyValuesSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteAddonLinkersLinkerKeyValuesRequest struct {
	PathParams DeleteAddonLinkersLinkerKeyValuesPathParams
	Security   DeleteAddonLinkersLinkerKeyValuesSecurity
}

type DeleteAddonLinkersLinkerKeyValuesResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
