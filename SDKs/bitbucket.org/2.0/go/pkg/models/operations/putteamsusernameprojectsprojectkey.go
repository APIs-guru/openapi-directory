package operations

import (
	"openapi/pkg/models/shared"
)

type PutTeamsUsernameProjectsProjectKeyPathParams struct {
	ProjectKey string `pathParam:"style=simple,explode=false,name=project_key"`
	Username   string `pathParam:"style=simple,explode=false,name=username"`
}

type PutTeamsUsernameProjectsProjectKeySecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PutTeamsUsernameProjectsProjectKeyRequest struct {
	PathParams PutTeamsUsernameProjectsProjectKeyPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
	Security   PutTeamsUsernameProjectsProjectKeySecurity
}

type PutTeamsUsernameProjectsProjectKeyResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Error       map[string]interface{}
	Project     map[string]interface{}
}
