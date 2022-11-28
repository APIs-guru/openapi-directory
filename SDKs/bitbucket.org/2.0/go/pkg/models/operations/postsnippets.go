package operations

import (
	"openapi/pkg/models/shared"
)

type PostSnippetsSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PostSnippetsRequest struct {
	Request  map[string]interface{} `request:"mediaType=application/json"`
	Security PostSnippetsSecurity
}

type PostSnippetsResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Error       map[string]interface{}
	Snippet     map[string]interface{}
}
