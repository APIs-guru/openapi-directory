package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTeamsUsernameProjectsProjectKeyPathParams struct {
	ProjectKey string `pathParam:"style=simple,explode=false,name=project_key"`
	Username   string `pathParam:"style=simple,explode=false,name=username"`
}

type DeleteTeamsUsernameProjectsProjectKeySecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteTeamsUsernameProjectsProjectKeyRequest struct {
	PathParams DeleteTeamsUsernameProjectsProjectKeyPathParams
	Security   DeleteTeamsUsernameProjectsProjectKeySecurity
}

type DeleteTeamsUsernameProjectsProjectKeyResponse struct {
	ContentType string
	StatusCode  int64
	Error       map[string]interface{}
}
