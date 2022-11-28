package operations

import (
	"openapi/pkg/models/shared"
)

type PutAddonLinkersLinkerKeyValuesPathParams struct {
	LinkerKey string `pathParam:"style=simple,explode=false,name=linker_key"`
}

type PutAddonLinkersLinkerKeyValuesSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PutAddonLinkersLinkerKeyValuesRequest struct {
	PathParams PutAddonLinkersLinkerKeyValuesPathParams
	Security   PutAddonLinkersLinkerKeyValuesSecurity
}

type PutAddonLinkersLinkerKeyValuesResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
