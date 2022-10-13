package operations

import (
	"openapi/pkg/models/shared"
)

type DelCustomConfigSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type DelCustomConfigRequest struct {
	Security DelCustomConfigSecurity
}

type DelCustomConfigResponse struct {
	ContentType string
	StatusCode  int64
}
