package operations

import (
	"openapi/pkg/models/shared"
)

type GetTeamsUsernameProjectsProjectKeyPathParams struct {
	ProjectKey string `pathParam:"style=simple,explode=false,name=project_key"`
	Username   string `pathParam:"style=simple,explode=false,name=username"`
}

type GetTeamsUsernameProjectsProjectKeySecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetTeamsUsernameProjectsProjectKeyRequest struct {
	PathParams GetTeamsUsernameProjectsProjectKeyPathParams
	Security   GetTeamsUsernameProjectsProjectKeySecurity
}

type GetTeamsUsernameProjectsProjectKeyResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
	Project     map[string]interface{}
}
