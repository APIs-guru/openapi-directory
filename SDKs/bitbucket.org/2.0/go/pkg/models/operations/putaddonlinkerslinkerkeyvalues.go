package operations

import (
	"openapi/pkg/models/shared"
)

type PutAddonLinkersLinkerKeyValuesPathParams struct {
	LinkerKey string `pathParam:"style=simple,explode=false,name=linker_key"`
}

type PutAddonLinkersLinkerKeyValuesSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PutAddonLinkersLinkerKeyValuesSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type PutAddonLinkersLinkerKeyValuesSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PutAddonLinkersLinkerKeyValuesSecurity struct {
	Option1 *PutAddonLinkersLinkerKeyValuesSecurityOption1 `security:"option"`
	Option2 *PutAddonLinkersLinkerKeyValuesSecurityOption2 `security:"option"`
	Option3 *PutAddonLinkersLinkerKeyValuesSecurityOption3 `security:"option"`
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
