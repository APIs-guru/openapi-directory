package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTeamsUsernameHooksUIDPathParams struct {
	UID      string `pathParam:"style=simple,explode=false,name=uid"`
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type DeleteTeamsUsernameHooksUIDSecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type DeleteTeamsUsernameHooksUIDSecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type DeleteTeamsUsernameHooksUIDSecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteTeamsUsernameHooksUIDSecurity struct {
	Option1 *DeleteTeamsUsernameHooksUIDSecurityOption1 `security:"option"`
	Option2 *DeleteTeamsUsernameHooksUIDSecurityOption2 `security:"option"`
	Option3 *DeleteTeamsUsernameHooksUIDSecurityOption3 `security:"option"`
}

type DeleteTeamsUsernameHooksUIDRequest struct {
	PathParams DeleteTeamsUsernameHooksUIDPathParams
	Security   DeleteTeamsUsernameHooksUIDSecurity
}

type DeleteTeamsUsernameHooksUIDResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
