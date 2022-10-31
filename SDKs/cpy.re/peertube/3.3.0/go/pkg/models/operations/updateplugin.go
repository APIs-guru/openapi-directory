package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePluginRequestBody1 struct {
	NpmName string `json:"npmName"`
}

type UpdatePluginRequestBody2 struct {
	Path string `json:"path"`
}

type UpdatePluginSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type UpdatePluginRequest struct {
	Request  *interface{} `request:"mediaType=application/json"`
	Security UpdatePluginSecurity
}

type UpdatePluginResponse struct {
	ContentType string
	StatusCode  int64
}
