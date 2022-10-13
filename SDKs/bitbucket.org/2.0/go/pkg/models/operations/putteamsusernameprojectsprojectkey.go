package operations

import (
	"openapi/pkg/models/shared"
)

type PutTeamsUsernameProjectsProjectKeyPathParams struct {
	ProjectKey string `pathParam:"style=simple,explode=false,name=project_key"`
	Username   string `pathParam:"style=simple,explode=false,name=username"`
}

type PutTeamsUsernameProjectsProjectKeySecurityOption1 struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PutTeamsUsernameProjectsProjectKeySecurityOption2 struct {
	Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
}

type PutTeamsUsernameProjectsProjectKeySecurityOption3 struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PutTeamsUsernameProjectsProjectKeySecurity struct {
	Option1 *PutTeamsUsernameProjectsProjectKeySecurityOption1 `security:"option"`
	Option2 *PutTeamsUsernameProjectsProjectKeySecurityOption2 `security:"option"`
	Option3 *PutTeamsUsernameProjectsProjectKeySecurityOption3 `security:"option"`
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
