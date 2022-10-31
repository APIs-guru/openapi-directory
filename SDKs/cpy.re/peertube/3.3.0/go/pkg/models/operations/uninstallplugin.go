package operations

import (
	"openapi/pkg/models/shared"
)

type UninstallPluginRequestBody struct {
	NpmName string `json:"npmName"`
}

type UninstallPluginSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type UninstallPluginRequest struct {
	Request  *UninstallPluginRequestBody `request:"mediaType=application/json"`
	Security UninstallPluginSecurity
}

type UninstallPluginResponse struct {
	ContentType string
	StatusCode  int64
}
