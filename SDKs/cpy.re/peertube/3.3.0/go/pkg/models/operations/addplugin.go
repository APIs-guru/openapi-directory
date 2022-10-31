package operations

import (
	"openapi/pkg/models/shared"
)

type AddPluginRequestBody1 struct {
	NpmName string `json:"npmName"`
}

type AddPluginRequestBody2 struct {
	Path string `json:"path"`
}

type AddPluginSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type AddPluginRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security AddPluginSecurity
}

type AddPluginResponse struct {
	ContentType string
	StatusCode  int64
}
