package operations

import (
	"openapi/pkg/models/shared"
)

type Destiny2PullFromPostmasterSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type Destiny2PullFromPostmasterRequest struct {
	Security Destiny2PullFromPostmasterSecurity
}

type Destiny2PullFromPostmasterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
