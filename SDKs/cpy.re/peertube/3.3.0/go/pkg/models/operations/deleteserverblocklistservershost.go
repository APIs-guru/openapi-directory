package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteServerBlocklistServersHostPathParams struct {
	Host string `pathParam:"style=simple,explode=false,name=host"`
}

type DeleteServerBlocklistServersHostSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type DeleteServerBlocklistServersHostRequest struct {
	PathParams DeleteServerBlocklistServersHostPathParams
	Security   DeleteServerBlocklistServersHostSecurity
}

type DeleteServerBlocklistServersHostResponse struct {
	ContentType string
	StatusCode  int64
}
