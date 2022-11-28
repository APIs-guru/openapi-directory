package operations

import (
	"openapi/pkg/models/shared"
)

type PostTeamsUsernameProjectsPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type PostTeamsUsernameProjectsSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PostTeamsUsernameProjectsRequest struct {
	PathParams PostTeamsUsernameProjectsPathParams
	Request    map[string]interface{} `request:"mediaType=application/json"`
	Security   PostTeamsUsernameProjectsSecurity
}

type PostTeamsUsernameProjectsResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Error       map[string]interface{}
	Project     map[string]interface{}
}
